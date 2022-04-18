// import {} from "./login.js";
import { ConversationList } from "../Chat/conversationList.js";
import { ConversationInfo } from "../Chat/conversationInfo.js";
import { Composer } from "../Chat/composer.js";
import { MessageList } from "../Chat/messageList.js";
import { UserList } from "../Chat/userList.js";

class Chat {
  container = document.createElement("div");
  // btnLogOut = document.createElement("button");

  activeConversation;

  subscribeConversationMessage = null;

  conversationList = new ConversationList();
  conversationInfo = new ConversationInfo();
  composer = new Composer();
  messageList = new MessageList();
  userList = new UserList();

  constructor() {
    this.container.appendChild(this.conversationList.container);
    this.container.classList.add("container");
    this.subscribeConversation();
    this.conversationList.container.classList.add("left-content");

    this.conversationList.setOnConversationItemClick(
      this.setActiveConversation
    );

    const divContent = document.createElement("div");
    divContent.classList.add("right-content");
    this.container.appendChild(divContent);

    divContent.appendChild(this.conversationInfo.container);

    const divMainContent = document.createElement("div");
    divMainContent.classList.add("right-main-content");
    divContent.appendChild(divMainContent);

    const divMessage = document.createElement("div");
    divMessage.classList.add("chat-container");
    divMainContent.appendChild(divMessage);

    divMessage.appendChild(this.messageList.container);
    divMessage.appendChild(this.composer.container);
    divMainContent.appendChild(this.userList.container);
  }

  setActiveConversation = (conversation) => {
    this.activeConversation = conversation;
    this.conversationInfo.setName(conversation.name);
    this.conversationList.setStyleActiveConversation(conversation);

    this.composer.setActiveConversation(conversation);
    this.userList.setActiveConversation(conversation);

    this.messageList.clearMessage();

    this.subscribeConversationMessageList();
  };

  subscribeConversation = () => {
    db.collection("conversations")
      .where("users", "array-contains", firebase.auth().currentUser.email)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            console.log("New conversation: ", change.doc.data());

            this.conversationList.handleCreateConversationAdded(
              change.doc.id,
              change.doc.data().name,
              change.doc.data().users
            );
          }
          if (change.type === "modified") {
            console.log("Modified conversation: ", change.doc.data());

            this.conversationList.handleConversationUpdate(
              change.doc.id,
              change.doc.data().name,
              change.doc.data().users
            );

            this.userList.setActiveConversation({
              id: change.doc.id,
              name: change.doc.data().name,
              users: change.doc.data().users,
            });
          }
          if (change.type === "removed") {
            this.conversationList.removeItem(change.doc.id);
          }
        });
      });
  };

  subscribeConversationMessageList = () => {
    if (this.subscribeConversationMessage !== null) {
      this.subscribeConversationMessage();
    }

    this.subscribeConversationMessage = db
      .collection("message")
      .where("conversationId", "==", this.activeConversation.id)
      .orderBy("sendAt")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            this.messageList.addMessage(change.doc.data());
          }
        });
      });
  };
}

export { Chat };

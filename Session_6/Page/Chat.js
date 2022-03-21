// import {} from "./login.js";
import { ConversationList } from "../Chat/conversationList.js";
import { ConversationInfo } from "../Chat/conversationInfo.js";

class Chat {
  container = document.createElement("div");
  // btnLogOut = document.createElement("button");

  activeConversation;

  conversationList = new ConversationList();
  conversationInfo = new ConversationInfo();

  constructor() {
    this.container.appendChild(this.conversationList.container);
    this.subscribeConversation();

    this.conversationList.setOnConversationItemClick(
      this.setActiveConversation
    );

    this.container.appendChild(this.conversationInfo.container);
  }

  setActiveConversation = (conversation) => {
    this.activeConversation = conversation;
    this.conversationInfo.setName(conversation.name);
    this.conversationList.setStyleActiveConversation(conversation);
  };

  subscribeConversation = () => {
    db.collection("conversations").onSnapshot((snapshot) => {
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
        }
        if (change.type === "removed") {
          this.conversationList.removeItem(change.doc.id);
        }
      });
    });
  };
}

export { Chat };

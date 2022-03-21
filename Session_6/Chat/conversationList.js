import { ConversationItem } from "./conversationItem.js";
import { CreateConversationForm } from "./createConversationForm.js";
class ConversationList {
  container = document.createElement("div");
  btnCreateConversation = document.createElement("button");
  createConversationForm = new CreateConversationForm();

  onConversationItemClick;
  conversations = new Array();
  constructor() {
    this.btnCreateConversation.innerHTML = "+ Create Conversation";
    this.container.appendChild(this.btnCreateConversation);
    this.container.appendChild(this.createConversationForm.container);
    this.btnCreateConversation.addEventListener("click", this.handleVisible);
  }

  setOnConversationItemClick = (listener) => {
    this.onConversationItemClick = listener;
  };

  setStyleActiveConversation = (conversation) => {
    this.conversations.forEach((item) => {
      if (item.id === conversation.id) item.setActiveHighlight(true);
      else item.setActiveHighlight(false);
    });
  };

  handleCreateConversationAdded = (id, name, users) => {
    const conversation = new ConversationItem(id, name, users);

    conversation.setOnClick((id, name, users) => {
      // console.log(id, name, users);

      this.onConversationItemClick({
        id: id,
        name: name,
        users: users,
      });
    });
    this.conversations.push(conversation);
    this.container.appendChild(conversation.container);
  };

  removeItem = (id) => {
    const index = this.conversations.findIndex((item) => item.id === id);
    const conversation = this.conversations.find((item) => item.id === id);
    this.conversations.splice(index, 1);

    conversation.container.remove();
  };

  handleVisible = () => {
    this.createConversationForm.setVisible(true);
  };
}

export { ConversationList };

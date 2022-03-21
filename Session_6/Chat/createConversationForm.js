import { InputCommon } from "../common/inputCommon.js";
import { Modal } from "../common/modal.js";

class CreateConversationForm {
  container = document.createElement("div");

  modal = new Modal();

  form = document.createElement("form");
  //First current user

  conversationNameInput = new InputCommon(
    "Conversation Name",
    "text",
    "Enter your conversation name",
    "ConversationName"
  );
  constructor() {
    this.container.appendChild(this.modal.container);
    // this.container.style.visibility = "hidden";
    this.container.style.display = "none";

    this.modal.setHeader("Create conversation");
    this.modal.setBody(this.form);
    this.modal.setOnclickCancel(() => {
      this.setVisible(false);
    });
    this.modal.setOnclickCreate(this.handleCreateConversation);

    this.form.appendChild(this.conversationNameInput.container);
  }

  handleCreateConversation = () => {
    const name = this.conversationNameInput.getValue();
    db.collection("conversations").add({
      name: name,
      users: [firebase.auth().currentUser.email],
    });
  };

  setVisible = (visible) => {
    if (visible) this.container.style.display = "block";
    // if (visible) this.container.style.visibility = "visible";
    // else this.container.style.visibility = "hidden";
    else this.container.style.display = "none";
  };
}

export { CreateConversationForm };

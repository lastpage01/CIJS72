import { CreateConversationForm } from "./createConversationForm.js";
class ConversationList {
  container = document.createElement("div");
  btnCreateConversation = document.createElement("button");
  createConversationForm = new CreateConversationForm();

  constructor(){
    this.btnCreateConversation.innerHTML = "+ Create Conversation";
    this.container.appendChild(this.btnCreateConversation);
    this.container.appendChild(this.createConversationForm.container);
    this.btnCreateConversation.addEventListener("click",this.handleVisible);
  }

  handleVisible = ()=>{
    this.createConversationForm.setVisible(true);
  }
}

export { ConversationList };



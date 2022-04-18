class Composer {
  activeConversation = null;

  container = document.createElement("div");
  form = document.createElement("form");
  input = document.createElement("input");
  btmEmotion = document.createElement("button");

  activeConversation;

  constructor() {
    this.input.type = "text";
    this.input.placeholder = "Type a message ...";
    this.btmEmotion.innerHTML = "submit";

    this.container.appendChild(this.form);
    this.form.appendChild(this.input);
    this.form.appendChild(this.btmEmotion);

    //
    this.form.addEventListener("keypress", this.handleSendMessage);
    this.btmEmotion.addEventListener("click", this.handleSendEmotion);
  }
  setActiveConversation = (conversation) => {
    this.activeConversation = conversation;
  };

  handleSendMessage = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      //Check authentication
      /**
       * user is login
       * active conversation
       */
      if (
        !firebase.auth().currentUser.email ||
        !this.activeConversation ||
        !this.input.value
      ) {
        //alert
        /**
         *....
         */
        alert("chon hoi thoai");
        return;
      } else {
        //Send message
        db.collection("message").add({
          content: this.input.value,
          sender: firebase.auth().currentUser.email,
          conversationId: this.activeConversation.id,
        });
      }
    }
  };
  handleSendEmotion = (event) => {
    event.preventDefault();
    if (!firebase.auth().currentUser.email || !this.activeConversation) {
        alert("chon hoi thoai")
    }else{
        db.collection("message").add({
            content: this.btmEmotion.innerHTML,
            sender: firebase.auth().currentUser.email,
            conversationId: this.activeConversation.id,
          });
    }
  };
}

export { Composer };

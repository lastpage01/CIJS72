// import {} from "./login.js";
import { ConversationList } from "../Chat/conversationList.js";

class Chat {
  container = document.createElement("div");
  btnLogOut = document.createElement("button");

  conversationList = new ConversationList();
  constructor() {
    this.container.appendChild(this.conversationList.container);

    // this.container.innerHTML = "Chat";

    // this.btnLogOut.innerHTML = "Log Out";
    // this.btnLogOut.addEventListener("click",this.handleLogOut);

    // this.container.appendChild(this.btnLogOut);
  }
  // handleLogOut = (e) => {
  //   firebase.auth().signOut().then(() => {
  //     // Sign-out successful.
  //     console.log("Sign out  successful");
  //   }).catch((error) => {
  //     // An error happened.
  //     console.log(error.message);
  //   });
  // };
}


export { Chat };


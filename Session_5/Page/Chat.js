import { } from "./login.js";

class Chat {
  Container = document.createElement("div");
  btnLogOut = document.createElement("button")
  constructor() {
    this.Container.innerHTML = "Chat";

    this.btnLogOut.innerHTML = "Log Out";
    this.btnLogOut.addEventListener("click",this.handleLogOut);

    this.Container.appendChild(this.btnLogOut);
  }
  handleLogOut = (e)=>{
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Sign out  successful");
    }).catch((error) => {
      // An error happened.
      console.log(error.message);
    });
  }
}

export{Chat};
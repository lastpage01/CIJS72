import { Login } from "./Page/login.js";
import { Chat } from "./Page/Chat.js";

const app = document.querySelector("#app");

const setScreen = (container) => {
  app.innerHTML = "";
  app.appendChild(container);
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
    // const loginScreen = new Login();
    // setScreen(loginScreen.container);
    const chat = new Chat();
    setScreen(chat.Container);
  } else {
    const loginScreen = new Login();
    setScreen(loginScreen.container);
  }
});

// Set default screen

export { setScreen };

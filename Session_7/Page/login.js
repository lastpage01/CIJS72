import { InputCommon } from "../common/inputCommon.js";
import { setScreen } from "../index.js";
import { Register } from "./register.js";

class Login {
  container = document.createElement("div");
  title = document.createElement("h3");

  form = document.createElement("form");
  inputEmail = new InputCommon(
    "Email: ",
    "email",
    "Enter your email",
    "inputEmail"
  );
  inputPassword = new InputCommon(
    "Password: ",
    "password",
    "Enter your password",
    "inputPassword"
  );

  actionContainer = document.createElement("div");
  btnLogin = document.createElement("button");
  btnRegister = document.createElement("button");

  constructor() {
    this.title.innerHTML = "Login";

    this.container.appendChild(this.form);

    this.form.appendChild(this.title);
    this.form.appendChild(this.inputEmail.container);
    this.form.appendChild(this.inputPassword.container);

    this.btnLogin.innerHTML = "Login";
    this.btnRegister.innerHTML = "Go to register";
    this.btnLogin.addEventListener("click", this.handleLogin);
    this.btnRegister.addEventListener("click", this.handleRedirectRegister);

    this.form.appendChild(this.btnLogin);
    this.form.appendChild(this.btnRegister);
  }

  handleRedirectRegister = (e) => {
    e.preventDefault();
    const registerScreen = new Register();
    setScreen(registerScreen.container);
  };
  handleLogin = (e) => {
    e.preventDefault();

    // Validate
    const emailValue = this.inputEmail.getValue();
    const password = this.inputPassword.getValue();

    if (!emailValue) {
      this.inputEmail.setErrorMessage("Email cannot be empty");
    } else {
      this.inputEmail.setErrorMessage("");
    }
    // login
    firebase
      .auth()
      .signInWithEmailAndPassword(emailValue, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        console.log(`Dang nhap thanh cong`);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
}

export { Login };

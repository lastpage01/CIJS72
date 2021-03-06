import { InputCommon } from "../Common/InputCommon.js";
import { ButtonCommon } from "../Common/ButtonCommon.js";
import { Login } from "./Login.js";
class SignUp {
  form = document.createElement("form");
  checkBox = document.createElement("input");
  inputUser = new InputCommon(
    "material-icons icon",
    "",
    "inputUser input",
    "text",
    "Your Name",
    "Name"
  );
  inputEmail = new InputCommon(
    "material-icons icon",
    "",
    "inputEmail input",
    "email",
    "Your Email",
    "Email"
  );
  inputPw = new InputCommon(
    "material-icons icon",
    "",
    "inputPW input",
    "password",
    "Password",
    "password"
  );
  inputRepeatPw = new InputCommon(
    "material-icons icon",
    "",
    "inputPW input",
    "password",
    "Repeat Password",
    "RePassword"
  );
  buttonSignUp = new ButtonCommon("btnSignUp", "submit", "Sign Up");
  buttonCancel = new ButtonCommon("btnCancel", "button", "Cancel");
  constructor() {
    this.form.setAttribute("class", "form_signUp animate");
    this.form.action = "#";

    let h1 = document.createElement("h1");
    h1.classList.add("text_signUp");
    h1.innerHTML = "Sign up";

    this.inputUser.textI("&#xe7fd;");
    this.inputPw.textI("&#xe63f;");
    this.inputRepeatPw.textI("&#xe63f;");
    this.inputEmail.textI("&#xe158;");

    ////check box remember me;
    this.checkBox.type = "checkbox";
    this.checkBox.id = "I agree ";
    this.checkBox.required = true;
    let span = document.createElement("span");
    span.innerHTML = " By creating an account you agree to our ";
    span.insertAdjacentHTML(
      "beforeend",
      '<a style="color:dodgerblue">Terms & Privacy.</a>'
    );
    span.style.color = "white";

    let div = document.createElement("div");

    div.appendChild(this.checkBox);
    div.appendChild(span);
    div.style.marginTop = "20px";

    ///

    this.form.appendChild(h1);
    this.form.appendChild(this.inputUser.html());
    this.form.appendChild(this.inputEmail.html());
    this.form.appendChild(this.inputPw.html());
    this.form.appendChild(this.inputRepeatPw.html());
    this.form.appendChild(div);

    this.form.appendChild(this.buttonSignUp.html());

    this.form.appendChild(this.buttonCancel.html());
    this.buttonCancel
      .html()
      .addEventListener("click", this.handleRedirectCancel);
    this.buttonSignUp.html().addEventListener("click", this.handleSignUp);
  }
  html() {
    return this.form;
  }
  handleRedirectCancel = (e) => {
    let loginScreen = new Login();
    let sign = document.getElementById("signUp");
    sign.innerHTML = "";
    let login = document.getElementById("login");
    login.style.marginTop = "5%";
    login.appendChild(loginScreen.html());
  };
  handleSignUp = (e) => {
    e.preventDefault();

    const name = this.inputUser.getValue();
    const email = this.inputEmail.getValue();
    const password = this.inputPw.getValue();
    const RePassword = this.inputRepeatPw.getValue();
    if (this.checkInput(name, email, password, RePassword) == true) {
      if (this.checkBox.checked == true) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            // ...
            // this.logout();
            this.logout();
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            // e.preventDefault();
            this.inputEmail.setHtmlErr("Email ???? ???????c s??? d???ng");
            console.log(error.message);
          });
      }
    }
  };

  checkInput(name, email, password, RePassword) {
    if (name == "") {
      this.inputUser.setHtmlErr("Name can not empty");
    } else this.inputUser.setHtmlErr("");

    if (email == "") this.inputEmail.setHtmlErr("Email can not empty");
    else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false
    )
      this.inputEmail.setHtmlErr("Email invalidated");
    else this.inputEmail.setHtmlErr("");

    if (password == "") this.inputPw.setHtmlErr("Password can not empty");
    else if (password.length < 6) {
      this.inputPw.setHtmlErr(
        "Password must be more than or equal to 6 characters"
      );
    } else this.inputPw.setHtmlErr("");

    if (RePassword == "")
      this.inputRepeatPw.setHtmlErr("Repeat password can not empty");
    else if (RePassword != password)
      this.inputRepeatPw.setHtmlErr("password does not match");
    else this.inputRepeatPw.setHtmlErr("");

    if (
      this.inputUser.getValueErr() == "" &&
      this.inputEmail.getValueErr() == "" &&
      this.inputPw.getValueErr() == "" &&
      this.inputRepeatPw.getValueErr() == ""
    )
      return true;
    else return false;
  }
  checkName = () => {};
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign out  successful");
        window.location = "../html/index.html";
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  }
}

export { SignUp };

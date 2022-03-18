import { InputCommon } from "../Common/InputCommon.js";
import { ButtonCommon } from "../Common/ButtonCommon.js";
import { Login } from "./Login.js";
class SignUp {
  form = document.createElement("form");
  checkBox = document.createElement("input");
  inputUser = new InputCommon(
    "material-icons icon",
    "inputUser",
    "text",
    "Your Name"
  );
  inputEmail = new InputCommon(
    "material-icons icon",
    "inputEmail",
    "email",
    "Your Email"
  );
  inputPw = new InputCommon(
    "material-icons icon",
    "inputPW",
    "password",
    "Password"
  );
  inputRepeatPw = new InputCommon(
    "material-icons icon",
    "inputPW",
    "password",
    "Repeat Password"
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

    //định dạng input

    this.inputPw.input.pattern = "(.){6}";
    this.inputPw.input.title = "Mật khẩu Phải lớn hơn 6 ký tự";
    this.inputEmail.input.pattern = "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";

    ///

    this.form.appendChild(h1);
    this.form.appendChild(this.inputUser.html());
    this.form.appendChild(this.inputEmail.html());
    this.form.appendChild(this.inputPw.html());
    this.form.appendChild(this.inputRepeatPw.html());
    this.form.appendChild(this.checkBox);
    this.form.appendChild(span);

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
    // e.preventDefault();

    const email = this.inputEmail.getValue();
    const password = this.inputPw.getValue();

    if (this.inputRepeatPw.getValue() != this.inputPw.getValue()) {
      this.inputRepeatPw.setHtmlErr("Mật khẩu không trùng khớp");
      e.preventDefault();
    } else {
      this.inputRepeatPw.setHtmlErr("");
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
          this.logout();
          console.log(`User ${email} is created`);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
          console.log(error.message);
        });
    }
  };

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

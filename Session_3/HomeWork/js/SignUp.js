import {InputCommon} from "./Common/InputCommon.js";
import {ButtonCommon} from "./Common/ButtonCommon.js";
import {Login} from "./Login.js";
class SignUp{
    form = document.createElement("form");
    checkBox = document.createElement("input");
    inputUser = new InputCommon("material-icons icon","inputUser","text","Username");
    inputEmail = new InputCommon("material-icons icon","inputEmail","email","Your Email");
    inputPw = new InputCommon("material-icons icon","inputPW","password","Password");
    inputRepeatPw = new InputCommon("material-icons icon","inputPW","password","Repeat Password");
    buttonSignUp = new ButtonCommon("btnSignUp","submit","Sign Up");
    buttonCancel = new ButtonCommon("btnCancel","button","Cancel");
    constructor(){

        this.form.setAttribute("class","form_signUp animate");
        this.form.action = "#";

        let h1 = document.createElement("h1");
        h1.classList.add("text_signUp");
        h1.innerHTML = "Sign up";

        this.inputUser.textI("&#xe7fd;");
        this.inputPw.textI("&#xe63f;");
        this.inputRepeatPw.textI("&#xe63f;");
        this.inputEmail.textI("&#xe158;");

        ////check box remember me;
        this.checkBox.type="checkbox";
        this.checkBox.id = "I agree ";
        let span = document.createElement("span");
        span.innerHTML=" By creating an account you agree to our ";
        span.insertAdjacentHTML("beforeend",'<a style="color:dodgerblue">Terms & Privacy.</a>');

        this.form.appendChild(h1);
        this.form.appendChild(this.inputUser.html());
        this.form.appendChild(this.inputEmail.html());
        this.form.appendChild(this.inputPw.html());
        this.form.appendChild(this.inputRepeatPw.html());
        this.form.appendChild(this.checkBox);
        this.form.appendChild(span);
        
        this.form.appendChild(this.buttonSignUp.html());
        
        this.form.appendChild(this.buttonCancel.html());
        this.buttonCancel.html().addEventListener("click",this.handleRedirectCancel);
    }
    html(){
        return this.form;
    }
    handleRedirectCancel = (e) =>{
        let loginScreen = new Login();
        let sign = document.getElementById("signUp");
        sign.innerHTML = "";
        let login = document.getElementById("login");
        login.style.marginTop = "5%";
        login.appendChild(loginScreen.html());
    }
}

export{SignUp};
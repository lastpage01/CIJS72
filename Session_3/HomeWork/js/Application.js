import {Login} from "./Login.js"
import {SignUp} from "./SignUp.js";
class Application{
    divLogin = document.getElementById("login");
    divSign = document.getElementById("signUp");
    login = new Login(); 
    signUp = new SignUp();
    constructor(){
        this.divLogin.appendChild(this.login.html());
    }

}


let app = new Application();

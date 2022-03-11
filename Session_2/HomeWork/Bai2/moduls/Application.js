import { Time } from "./Time.js";

class Application{
    container;
    index = 4;
    listItemTime = [];
    btnStopAll;
    btnStartAll;

    constructor(){
        let body = document.querySelector("body");

        this.container = document.createElement("div");
        this.container.classList.add("container");

        let ol = document.createElement("ol");
        this.container.appendChild(ol);
        for(let i = 0; i < this.index; i++){
            let li = document.createElement("li");
            this.listItemTime.push(new Time());
            li.appendChild(this.listItemTime[i].html());
            ol.appendChild(li);
            
        }

        this.btnStartAll = document.createElement("button");
        this.btnStartAll.classList.add("startAll");
        this.btnStartAll.innerHTML = "Start All";

        this.btnStopAll = document.createElement("button");
        this.btnStopAll.classList.add("stopAll");
        this.btnStopAll.innerHTML = "Stop All";

        this.container.appendChild(this.btnStartAll);
        this.container.appendChild(this.btnStopAll);

        body.appendChild(this.container);

        this.btnStartAll.addEventListener("click",this.handlerStartAll)
        this.btnStopAll.addEventListener("click",this.handlerStopAll)

    }

    handlerStartAll = ()=>{
        // for (let i = 0; i < this.index; i++) {
        //     this.listItemTime[i].handlerStart();           
        // }
        for (let i of this.listItemTime) {
            i.handlerStart();
        }
    }
    handlerStopAll = ()=>{
        for (let i of this.listItemTime) {
            i.handlerStop();
        }
    }

}

let app = new Application();
class Time{

    divContent;
    spanTime;
    btnStart;
    btnStop;
    btnPause;
    interval;
    count = 0;
    checkStart = false;
    constructor(){
        this.divContent = document.createElement("div");
        this.divContent.classList.add("content");

        

        this.spanTime = document.createElement("span");
        this.spanTime.classList.add("timer");
        this.spanTime.innerHTML = "00:00:00"

        this.btnStart = document.createElement("button");
        this.btnStart.type = "button";
        this.btnStart.innerHTML = "Start";
        this.btnStart.classList.add("start");
        
        this.btnStop = document.createElement("button");
        this.btnStop.type = "button";
        this.btnStop.innerHTML = "Stop";
        this.btnStop.classList.add("stop");
        
        this.btnPause = document.createElement("button");
        this.btnPause.type = "button";
        this.btnPause.innerHTML = "Pause";
        this.btnPause.classList.add("pause");

        this.divContent.insertAdjacentElement("beforeend",this.spanTime);
        this.divContent.insertAdjacentElement("beforeend",this.btnStart);
        this.divContent.insertAdjacentElement("beforeend",this.btnStop);
        this.divContent.insertAdjacentElement("beforeend",this.btnPause);

        this.btnStart.addEventListener("click",this.handlerStart);
        this.btnStop.addEventListener("click",this.handlerStop);
        this.btnPause.addEventListener("click",this.handlerPause);
    }
    html(){
        return this.divContent;
    }

    convertTime(count){
        let mls = count % 100;
        let s = Math.floor(count / 100) % 60;
        let m = Math.floor(Math.floor(count / 100) / 60);

        if (mls < 10) mls = "0" + mls;
        if (s < 10) s = "0" + s;
        if (m < 10) m = "0" + m;


        return m + ":" + s + ":" + mls;
    }

    handlerStart = () =>{
        if(this.checkStart == false){
            this.interval = setInterval(()=>{
                this.count++;
                this.spanTime.innerHTML = this.convertTime(this.count);
            },10);
            this.checkStart = true;
        }
    }
    handlerStop = ()=>{
        clearInterval(this.interval);
        this.checkStart = false;
        this.spanTime.innerHTML = "00:00:00";
        this.count = 0;
    }

    handlerPause = ()=>{
        clearInterval(this.interval);
        this.checkStart = false;
    }


    
}

export{Time};
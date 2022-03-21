class InputCommon{
    div = document.createElement("div");
    input = document.createElement("input");
    i = document.createElement("i");
    err = document.createElement("span");
    constructor(clI,clInput,type,placeholder){
        this.input.classList.add(clInput);
        this.input.type = type;
        this.input.placeholder = placeholder;
        
        this.input.required = true;

        this.i.setAttribute("class",clI);
        

        this.div.classList.add("inFor");
        this.div.appendChild(this.i);
        this.div.appendChild(this.input);

        this.err.style.color = "rgb(255, 74, 74)";

    }
    html(){
        let div = document.createElement("div");
        div.appendChild(this.div);
        div.insertAdjacentHTML("beforeend","<hr>");
        div.appendChild(this.err);
        return div;
    }
    textI(value){
        this.i.innerHTML = value;
    }
    getValue(){
        return this.input.value;
    }
    setValue(value){
        this.input.value = value ;
    }
    setHtmlErr(value){
        this.err.innerHTML = value;
    }

}

export{InputCommon};
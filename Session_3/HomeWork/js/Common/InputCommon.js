class InputCommon{
    div = document.createElement("div");
    input = document.createElement("input");
    i = document.createElement("i");
    constructor(clI,clInput,type,placeholder){
        this.input.classList.add(clInput);
        this.input.type = type;
        this.input.placeholder = placeholder;
        this.input.required = true;
        

        this.i.setAttribute("class",clI);
        

        this.div.classList.add("inFor");
        this.div.appendChild(this.i);
        this.div.appendChild(this.input);
    }
    html(){
        let div = document.createElement("div");
        div.appendChild(this.div);
        div.insertAdjacentHTML("beforeend","<hr>");
        return div;
    }
    textI(value){
        this.i.innerHTML = value;
    }

}

export{InputCommon};
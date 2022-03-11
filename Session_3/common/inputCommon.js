class InputCommon{

    content = document.createElement("div");
    label = document.createElement("label");
    input = document.createElement("input");
    errMessage = document.createElement("div");

    constructor(label, inputType, placeholder, name){
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.input.type = inputType;
        this.input.placeholder = placeholder;
        this.input.name = name;

        this.content.appendChild(this.label);
        this.content.appendChild(this.input);
        this.content.appendChild(this.errMessage);
    }
}
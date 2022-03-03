import {Animal} from "./Animal.js";

class Rabbit extends Animal {
    constructor(name) {
        super();
        this.name = name;
        this.created = Date.now();
    }
  }

  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  alert(rabbit.name);
class itemAnswer {
  container = document.createElement("div");

  constructor(value) {
    this.container.innerHTML = value;
    this.container.classList.add("item")
  }
  handleOnClick = (listener) =>{
    this.container.onclick = listener
  }
}

export { itemAnswer };

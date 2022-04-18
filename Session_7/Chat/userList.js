class UserList {
  activeConversation = null;

  container = document.createElement("div");
  form = document.createElement("form");
  input = document.createElement("input");
  btnAdd = document.createElement("button");
  userList = document.createElement("ul");

  constructor() {
    this.container.appendChild(this.form);
    this.container.appendChild(this.userList);

    this.form.appendChild(this.input);
    this.form.appendChild(this.btnAdd);

    this.input.type = "text";
    this.input.placeholder = "Enter email ...";
    this.btnAdd.innerHTML = "Add new user";

    this.btnAdd.addEventListener("click", this.handleAddNewUser);
  }

  handleAddNewUser = (event) => {
    event.preventDefault();
    const newUserList = this.activeConversation.users.concat(this.input.value);
    db.collection("conversations").doc(this.activeConversation.id).update({
        users : newUserList,
    });
  };

  setActiveConversation = (conversation) => {
    this.activeConversation = conversation;
    this.userList.innerHTML = "";
    conversation.users.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = user;
      this.userList.appendChild(li);
    });
  };
}
export { UserList };

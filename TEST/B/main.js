import { itemAnswer } from "./itemAnswer.js";

async function onLoad() {
  async function getComments() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    );
    const projects = await res.json();
    return projects;
  }
  let data = await getComments();
  let dataArray = data.results;
  let app = new QuizApp(dataArray);
  document.querySelector("body").appendChild(app.container);
}
onLoad();
class QuizApp {
  container = document.createElement("div");
  question = document.createElement("div");
  answer = document.createElement("div");
  point = document.createElement("div");
  itemAnswerApp;

  arrShowed = [];

  diem = 0;
  arr = [];

  constructor(data) {
    this.arr = data;
    this.container.appendChild(this.point);
    this.point.innerHTML = "0";
    this.point.classList.add("point");
    this.container.classList.add("container");
    this.container.appendChild(this.question);
    this.container.appendChild(this.answer);
    this.answer.classList.add("answer");
    this.handleShow();
  }

  handleShow = () => {
    let num = Math.floor(Math.random() * this.arr.length);
    if (this.arrShowed.includes(num) == false) {
      this.answer.innerHTML = "";
      this.question.innerHTML = "";
      this.arrShowed.push(num);
      this.question.innerHTML = this.arr[num].question;
      let numCorrect = Math.floor(Math.random() * 4);
      let arrIncorrect = [];
      let n = 0;

      for (let i = 0; i < 4; i++) {
        if (i == numCorrect) {
          this.itemAnswerApp = new itemAnswer(this.arr[num].correct_answer);
          this.answer.appendChild(this.itemAnswerApp.container);
          this.itemAnswerApp.handleOnClick(() => {
            this.handleOnClickTrue();
          });
        } else {
          while (true) {
            let numIncorrect = Math.floor(Math.random() * 3);
            if (arrIncorrect.includes(numIncorrect) == false) {
              arrIncorrect.push(numIncorrect);
              this.itemAnswerApp = new itemAnswer(
                this.arr[num].incorrect_answers[numIncorrect]
              );
              this.itemAnswerApp.handleOnClick(() => {
                this.handleOnClickFalse();
              });
              this.answer.appendChild(this.itemAnswerApp.container);
              n = n + 1;
            }
            if (n == 3) break;
          }
        }
      }
    } else {
      this.handleShow();
    }
  };

  handleOnClickTrue = () => {
    alert("true");
    this.diem = this.diem + 10;
    this.point.innerHTML = this.diem;
    this.handleShow();
  };

  handleOnClickFalse = () => {
    alert("false");
    this.handleShow();
  };
}

import { itemAnswer } from "./itemAnswer.js";

let handleFunction = (data) => {
  let app = new QuizApp(data);
  document.querySelector("body").appendChild(app.container);
};

fetch(
  "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
)
  .then((response) => response.json())
  .then((data) => handleFunction(data));

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
    } else this.handleShow();
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

// let arr = [
//   {
//     category: "Sports",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "The Rio 2016 Summer Olympics held it&#039;s closing ceremony on what date?",
//     correct_answer: " Leicester City ",
//     incorrect_answers: [
//       " Northampton Town ",
//       " Bradford City ",
//       " West Bromwich Albion ",
//     ],
//   },
//   {
//     category: "Sports",
//     type: " multiple ",
//     difficulty: "easy",
//     question:
//       "In bowling, what is the term used for getting three consecutive strikes? ",
//     correct_answer: " 4 ",
//     incorrect_answers: [" 1 ", " 2 ", " 3 "],
//   },
//   {
//     category: "Sports",
//     type: " multiple ",
//     difficulty: "easy",
//     question:
//       "Who is often called &quot;the Maestro&quot; in the men&#039;s tennis circuit?",
//     correct_answer: "Nico Rosberg",
//     incorrect_answers: ["Lewis Hamilton", "Max Verstappen", "Kimi Raikkonen"],
//   },
//   {
//     category: "Sports",
//     type: " multiple ",
//     difficulty: "easy",
//     question: "What is the name of Manchester United&#039;s home stadium?",
//     correct_answer: "Don Cherry",
//     incorrect_answers: ["Don McKellar", "Don Taylor ", " Donald Sutherland "],
//   },
//   {
//     category: "Sports",
//     type: " multiple ",
//     difficulty: "easy",
//     question: "Which two teams played in Super Bowl XLII?",
//     correct_answer: "Real Madrid CF",
//     incorrect_answers: ["Atletico Madrid ", " AS Monaco FC ", " Juventus FC "],
//   },
// ];

// class QuizApp {
//   container = document.createElement("div");
//   question = document.createElement("div");
//   answer = document.createElement("div");
//   point = document.createElement("div");
//   itemAnswerApp;

//   arrShowed = [];

//   diem = 0;

//   constructor() {
//     this.container.appendChild(this.point);
//     this.point.innerHTML = "0";
//     this.point.classList.add("point");
//     this.container.classList.add("container");
//     this.container.appendChild(this.question);
//     this.container.appendChild(this.answer);
//     this.answer.classList.add("answer");
//     this.handleShow();
//   }

//   handleShow = () => {
//     let num = Math.floor(Math.random() * arr.length);
//     if (this.arrShowed.includes(num) == false) {
//       this.answer.innerHTML = "";
//       this.question.innerHTML = "";
//       this.arrShowed.push(num);
//       this.question.innerHTML = arr[num].question;
//       let numCorrect = Math.floor(Math.random() * 4);
//       let arrIncorrect = [];
//       let n = 0;

//       for (let i = 0; i < 4; i++) {
//         if (i == numCorrect) {
//           this.itemAnswerApp = new itemAnswer(arr[num].correct_answer);
//           this.answer.appendChild(this.itemAnswerApp.container);
//           this.itemAnswerApp.handleOnClick(() => {
//             this.handleOnClickTrue();
//           });
//         } else {
//           while (true) {
//             let numIncorrect = Math.floor(Math.random() * 3);
//             if (arrIncorrect.includes(numIncorrect) == false) {
//               arrIncorrect.push(numIncorrect);
//               this.itemAnswerApp = new itemAnswer(
//                 arr[num].incorrect_answers[numIncorrect]
//               );
//               this.itemAnswerApp.handleOnClick(() => {
//                 this.handleOnClickFalse();
//               });
//               this.answer.appendChild(this.itemAnswerApp.container);
//               n = n + 1;
//             }
//             if (n == 3) break;
//           }
//         }
//       }
//     } else this.handleShow();
//   };

//   handleOnClickTrue = () => {
//       alert("true");
//       this.diem = this.diem + 10;
//       this.point.innerHTML = this.diem;
//       this.handleShow();

//   };

//   handleOnClickFalse = () => {
//     alert("false");
//     this.handleShow();
//   };
// }

// let app = new QuizApp();
// document.querySelector("body").appendChild(app.container);

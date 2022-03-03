let body = document.querySelector("body");

let pRow = document.createElement("p");
pRow.innerText = "Nhập số hàng:";
body.insertAdjacentElement("beforeend", pRow);

let inputRow = document.createElement("input");
inputRow.setAttribute("type", "number");
inputRow.setAttribute("min","0");
body.insertAdjacentElement("beforeend",inputRow);

let pCol = document.createElement("p");
pCol.innerText = "Nhập số cột:";
body.insertAdjacentElement("beforeend", pCol);

let inputCol= document.createElement("input");
inputCol.setAttribute("type","number");
inputCol.setAttribute("min","0");
body.insertAdjacentElement("beforeend",inputCol);

body.insertAdjacentHTML("beforeend","<br><br>")

let submit = document.createElement("button");
submit.innerHTML = "Submit";
body.insertAdjacentElement("beforeend",submit);
/////

body.insertAdjacentHTML("beforeend","<br><br>")
let table = document.createElement("table");
body.insertAdjacentElement("beforeend", table);

submit.addEventListener("click",()=>{
    table.innerHTML = "";
    let row = inputRow.value;
    let col = inputCol.value;

    for (let i= 0; i < row ; i++) {
        let tr = document.createElement("tr");
        table.insertAdjacentElement("beforeend", tr);
        for (let j = 0; j < col; j++) {
            let td = document.createElement("td");
            tr.insertAdjacentElement("beforeend",td);
        }
    }
})




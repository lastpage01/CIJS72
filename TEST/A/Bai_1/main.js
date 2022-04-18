const arr1 = prompt("nhập mảng thứ nhất:");
const arr2 = prompt("nhập mảng thứ hai:");
let arrOther = [];

arr1.split(" ");
arr2.split(" ");

for (let i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i]) == false)
        arrOther.push(arr1[i]);
}


for (let i = 0; i < arr2.length; i++) {
    if(arr1.includes(arr2[i]) == false)
        arrOther.push(arr2[i]);
}

document.querySelector("body").insertAdjacentHTML("beforeend",`<p>${arr1.toString()}</p><p>${arr2.toString()}</p><p>${arrOther.toString()}</p>`);


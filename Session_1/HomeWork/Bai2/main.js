let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");

let ngto = [];
for(let i = a ;i <=b;i++){
    let kt = true;
    for( j = 2 ; j <= i / 2 ; j++){
        if( i % j == 0 )
        {
            kt = false;
            break;
        }
    }
    if(kt == true)
        ngto.push(i);
}

console.log(ngto);
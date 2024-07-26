// Nested if-else Statement

//Task 3

let a = 3;
let b = 8;
let c = 2;
if(a >= b){
    if (a >= c) {
        console.log(`${a} is largest`);
    } else {
        console.log(`${c} is largest`);
    }
}else{
    if (b >= c) {
        console.log(`${b} is largest`);
    } else {
        console.log(`${c} is largest`);
    }
}
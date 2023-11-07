// var、let、const：用於宣告變數的差別。
// var 是全域變數，let 是區域變數，const 用於宣告常數。
// var 宣告的變數，可以重新賦值, 也可以重新宣告, var 是全域變數
// let 宣告的變數，可以重新賦值, 但不能重新宣告, let 是區域變數
// 常數 const 宣告的變數，不能重新賦值, 也不能重新宣告, const 是區域變數

var a = 10;
var a = 'Ten'; // 可以重複宣告
console.log(a); // Ten

let b = 20;
//let b = 'Twenty'; // 不可以重複宣告
console.log(b); // 20

const c = 30;
//const c = 'Thirty'; // 不可以重複宣告
console.log(c); // 30

// var 與 let 在 function 內的差別
function varTest() {
    var x = 1;
    if(true) {
        var x = 2; // 與 21 行的 x 是同一個變數
        console.log(x); // 2
    }
    console.log(x); // 2
}
varTest();

function letTest() {
    let x = 1;
    if(true) {
        let x = 2; // 與 21 行的 x 不是同一個變數, 因為 x 是區域變數
        console.log(x); // 2
    }
    console.log(x); // 1
}
letTest();

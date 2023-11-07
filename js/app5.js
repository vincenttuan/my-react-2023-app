// 默認參數（Default Parameters）：函數參數的默認值。

// ES5
function foo(x, y) {
    if(x == undefined) {
        x = 0;
    }
    if(y == undefined) {
        y = 0;
    }
    console.log(x + y);
}
foo(); // 0
foo(1); // 1
foo(1, 2); // 3
foo(1, 2, 3); // 3
foo(null, 2); // 2
foo(2, undefined); // 2

// ES6
function bar(x = 0, y = 0) {
    console.log(x + y);
}
bar(); // 0
bar(1); // 1
bar(1, 2); // 3
bar(1, 2, 3); // 3
bar(null, 2); // 2
bar(2, undefined); // 2
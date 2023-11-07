// 展開運算符（Spread/Rest Operator）：用於在函數調用/陣列構造時展開陣列或對象。
// ES5
function foo(x, y, z) {
    console.log(x, y, z);
}
foo(1, 2, 3); // 1 2 3
foo(1, 2, 3, 4); // 1 2 3
foo(1, 2, 3, 4, 5); // 1 2 3

// ES6
// ...args 類似 java 的 varargs
function bar(...args) {
    console.log(args); // args 是一個陣列
}
bar(1, 2, 3); // [ 1, 2, 3 ]
bar(1, 2, 3, 4); // [ 1, 2, 3, 4 ]
bar(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

// 陣列展開運算符
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [...arr1, ...arr2]; // 合併 arr1 和 arr2
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 物件展開運算符
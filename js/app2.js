// 箭頭函數（Arrow Functions）：更簡潔的函數寫法。
// ES5
var add1 = function(a, b) {
    return a + b;
}
console.log(add1(1, 2)); // 3

// ES6
var add2 = (a, b) => {
    return a + b;
}
// 如果只有一個 return 敘述，可以省略大括號與 return 敘述
var add3 = (a, b) => a + b;
console.log(add2(1, 2)); // 3
console.log(add3(1, 2)); // 3

// 如果只有一個參數, 可以省略小括號與 return 敘述
var square = x => x * x; // (x) => { return x * x; }
console.log(square(3)); // 9

// 如果沒有參數
var sayHello = () => 'Hello';
console.log(sayHello()); // Hello

// ES5
var obj = {
    id: 5,
    counter: function() {
        setTimeout(function() {
            console.log(this.id);
        }.bind(this), 1000);
    }
}
obj.counter(); // 5

// ES6
// 箭頭函數的 this 是定義時所在的對象，而不是使用時所在的對象
var obj = {
    id: 6,
    counter: function() {
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
}
obj.counter(); // 6
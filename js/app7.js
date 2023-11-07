// 類別（Classes）：物件導向程式設計的語法糖（Syntactic Sugar）
// 何謂語法糖？簡單來說，就是一種語法，讓程式碼更容易閱讀、更容易理解。
// ES5
// 建立一個 Animal 物件
function Animal(name) {
    this.name= name;
}
// 提供一個 getName 方法
Animal.prototype.getName = function() {
    return this.name;
}

var animal = new Animal('dog');
console.log(animal.getName()); // dog

// ES6
// 就類似像寫 java class 一樣
class Animal2 {
    // 建構子
    constructor(name) {
        this.name = name;
    }
    // 方法
    getName() {
        return this.name;
    }
}
var animal2 = new Animal2('dog');
console.log(animal2.getName()); // dog
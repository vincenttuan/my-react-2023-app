// 邏輯賦值運算符（Logical Assignment Operators，ES2021）：結合了邏輯運算符與賦值運算符的新特性。
// 邏輯與賦值 &&=、||=、??=
let a1 = 0;
let a2 = 2;
let b = 3;

// 如果 a 是真值，將 b 的值賦值給 a
// a 若為真值：a 必須是非 0 整數、非空字串
a1 &&= b;
console.log('a1 = ' + a1);

a2 &&= b;
console.log('a2 = ' + a2);

let c = null;
let d = 10;
// 如果 c 是 ''、0、null、undefined，則 d 的值就會賦值給 c
c ||= d
console.log('c = ' + c);

// 邏輯賦值 (??=) null 或 undefined
let e = null;
let f = 7;
// 若 e 是 null 或 undefined，f 的值將會賦值給 e
e ??= f;
console.log('e = ' + e);


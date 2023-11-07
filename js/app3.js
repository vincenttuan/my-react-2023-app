// 模板字面值（Template Literals）：允許嵌入表達式的字串字面值。
// 模板字面量由反引號（`）包圍，而嵌入的表達式則由 ${ } 包圍。

const username = '小明'
const age = 18;
const message1 = `你好，我是${username}，今年${age}歲。`; // 用反引號（`）
console.log(message1); // 你好，我是小明，今年18歲。

const message2 = '你好，我是${username}，今年${age}歲。'; // 單引號（'）
console.log(message2); // 你好，我是${username}，今年${age}歲。資料不會被解析
console.log('你好，我是' + username + '，今年' + age + '歲。') // 使用 + 號

// 反引號（`）支援換行
const message3 = `你好，
我是${username}，
今年${age}歲。`;
console.log(message3); 


// 在 math.js 中定義一些函式
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

// 導出函數 (ES6 模組語法)
//export {add, substract};

// 因為 Run Code 不支援 ES6 模組語法
// 改用 CommonJS (Node.js 的模組系統)
module.exports = {add, substract};

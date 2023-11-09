// Nullish Coalescing Operator - 空值合併運算符（ES2020）：用於處理空值（null或undefined）的運算符。
// 在這個例子中，?? 運算符用於檢查左邊的表達式是否是 null 或 undefined，
// 如果是，就使用右邊的表達式作為預設值。
const response = {
    settings2: {
        theme: null,
        fontSize: undefined
    }
}

// 使用 Nullish Coalescing Operator
const theme = response.settings?.theme ?? 'dark'
console.log(theme)

const fontSize = response.settings?.fontSize ?? 'medium'
console.log(fontSize)

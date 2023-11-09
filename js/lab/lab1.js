/*
  將 app1.js ~ app12.js 所學習到的技術做一個 Lab
  用於計算購物清單總金額並列印出來的範例腳本。
  假設你是一位顧客，正在使用一個網上商店的購物車系統。
  當你選擇商品並將它們加入購物清單時，系統會根據商品的價格來計算總金額。
  然後，這個腳本會模擬從伺服器獲取最新的價格資訊，並重新計算清單中所有商品的總金額。
  最後，系統會顯示一張包含最終總金額的收據。
  這個練習讓同學們了解如何在 JavaScript 中實現基本的購物車功能，並熟悉非同步編程和其他現代 JavaScript 特性。
*/
// 宣告購物清單上的項目與價格
const items = ['bread', 'milk', 'butter']
const price = {bread: 2, milk: 1.5, butter: 3}

// 定義一個可以計算總金額的函數
const calcTotal = (prices, ...items) => {
    // 利用 reduce 方法來累加每個項目的金額
    return items.reduce((total, {item, qty}) => total + (prices[item] || 0) * qty, 0);
}

// 定義一個收據函數，含列印功能
const printReceipt = total => console.log(`Total: ${total}`); // 字面模板技巧

// 添加項目到購物車的函式(有預設參數值)
const addToShoppingList = (list, item = 'eggs', qty = 1) => list.push({item, qty});

// 模擬從後端 API 獲取價格的函式
const fetchPrices = async () => {
    const response = await Promise.resolve(price); // 使用到 Promise, async/await
    return response;
}

// 取得項目的價格
const getItemPrice = (prices, item) => prices?.[item] ?? '無此價格';

// 主程式：
// 非同步環境：(async () => {...})();
(async () => {
    const prices = await fetchPrices(); // 取得所有商品的價格
    console.log(prices)

    let shoppingList = []; // 空的購物清單
    addToShoppingList(shoppingList, 'bread', 3); // 買 3 個麵包加入到購物清單中
    console.log('bread: $' + getItemPrice(prices, 'bread'))
    addToShoppingList(shoppingList, 'milk', 2); // 買 2 個牛奶加入到購物清單中
    console.log('milk: $' + getItemPrice(prices, 'milk'))
    console.log(shoppingList);

    const total = calcTotal(prices, ...shoppingList); // 計算總金額
    printReceipt(total); // 列印總金額

})()
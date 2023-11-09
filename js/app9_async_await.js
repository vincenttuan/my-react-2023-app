// Promise 和 Async/Await：用於處理非同步操作。
// Async 是一個表示非同步運算的函式，它會回傳一個 Promise 物件。
// 與 Promise 不同的是，Async 函式內部的程式碼可以使用 await 關鍵字來等待 Promise 物件的狀態變化。
// 更容易使用，更容易閱讀，更容易維護。

async function getData(url) {
    try {
        const response = await fetch(url); // 這是第一次的 await
        if(response.ok) {
            const data = await response.json();  // 這是第二次的 await
            console.log(data);
        } else {
            throw new Error('回應失敗');
        }
    } catch (error) {
        console.error(error);
    }
}

// 食用米抽檢不合個產品 url

const url = 'https://data.moa.gov.tw/Service/OpenData/FromM/AgricultureiRiceFailure.aspx';
getData(url);

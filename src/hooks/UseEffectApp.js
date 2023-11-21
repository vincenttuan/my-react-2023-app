/**
 * useEffect 的例子：
 * 目的：useEffect 用於處理函數組件中的副作用，例如 API 調用、數據訂閱或直接的 DOM 操作。
 * 它在組件渲染後執行，並能夠在組件更新後重複執行。
 * 功能：在這個例子中，useEffect 用於在組件每次更新時改變指定<div>內容。
 * 每當 count 變化時，useEffect 被觸發，更新指定<div>內容。
 * 
 * 總的來說，useState 是用於在函數組件中管理狀態的，而 useEffect 主要用於執行與狀態變化相關的副作用操作。
 * 兩者結合使用，能夠有效地在函數組件中實現豐富的動態行為和副作用處理。
 * 
*/
import React, {useState, useEffect} from "react";

function UseEffectApp() {
    const [price, setPrice] = useState(0);
    const [temp, setTemp] = useState(0);

    useEffect(() => {
        // 副作用
        if(price > 580) {
            console.log('下單 ' + new Date().toLocaleDateString());
        }
        //console.log('effect ' + new Date().toLocaleDateString());
    }, [price]); // 指定依賴，只有當 price 改變的時候才會執行 useEffect

    return (
        <div>
            <p>目前台積電最新報價 {price} 元</p>
            <button onClick={() => setPrice(500+Math.floor(Math.random()*100))}>點我看報價</button>
            <p>目前最新氣溫 {temp} 度</p>
            <button onClick={() => setTemp(10+Math.floor(Math.random()*10))}>點我看氣象</button>
        </div>
    )
}

export default UseEffectApp;

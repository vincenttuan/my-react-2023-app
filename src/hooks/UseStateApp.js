/**
 * useState 的例子：
 * 目的：useState 用於在函數組件中添加和管理本地狀態（state）。
 * 在這個例子中，useState 用於創建一個狀態變數 count 和一個設置該狀態的函數 setCount。
 * 功能：當點擊按鈕時，setCount 被調用，更新 count 的值，從而引起組件的重新渲染，更新顯示的計數。
 */
import React, { useState } from "react";

function UseStateApp() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>你點擊了 { count } 次</p>
            <button onClick={() => setCount(count + 1)}>點我</button>
        </div>
    );
}

export default UseStateApp;

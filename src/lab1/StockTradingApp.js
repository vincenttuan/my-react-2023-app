import React, { useContext } from "react";
import { StockContext } from "./StockProvider";

function StockTradingApp() {
    const stocks = useContext(StockContext); // 使用 useContext() 取得股價報價

    return (
        <div>
            <h2>股價報價</h2>
            <div>Apple (AAPL) 當前價格: ${stocks['AAPL'].toFixed(2)}</div>
            <div>Misrosoft (MSFT) 當前價格: ${stocks['MSFT'].toFixed(2)}</div>
            <div>Google (GOOG) 當前價格: ${stocks['GOOG'].toFixed(2)}</div>
            <h2>股票交易</h2>
        </div>
    );
}

export default StockTradingApp;
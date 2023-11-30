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
            <div>可用資金: $ 0.0</div>
            <div>投資價值: $ 0.0</div>
            <div>即時獲利: $ 0.0</div>
            <div>
                股票下單:<br />
                <select>
                    <option value="AAPL">Apple</option>
                    <option value="MSFT">Misrosoft</option>
                    <option value="GOOG">Google</option>
                </select>
                &nbsp;&nbsp;
                <input type="number" min="1" value="1" /> 股
                &nbsp;&nbsp;
                <button>買進</button>
                &nbsp;&nbsp;
                <button>賣出</button>
            </div>
            <h2>持有股票</h2>

        </div>
    );
}

export default StockTradingApp;
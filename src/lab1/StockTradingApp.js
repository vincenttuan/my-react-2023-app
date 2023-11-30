import React, { useCallback, useContext, useReducer, useState } from "react";
import { StockContext } from "./StockProvider";
import portfolioReducer from "./StockReducer";

function StockTradingApp() {
    const stocks = useContext(StockContext); // 使用 useContext() 取得股價報價
    const [state, dispatch] = useReducer(portfolioReducer, {balance: 10000, portfolio: {}});
    const [selectedStock, setSelectedStock] = useState('AAPL');
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState(''); // 存放錯誤訊息的狀態資料
    // 購買股票
    const buyStock = useCallback(() => {
        const cost = stocks[selectedStock] * quantity;
        if(state.balance < cost) {
            setError('餘額不足，無法購買');
        } else {
            dispatch({
                type: 'buy',
                payload: {stockId: selectedStock, quantity, price: stocks[selectedStock]}
            });
            setError(''); // 清除錯誤訊息
        }

    }, [selectedStock, quantity, stocks, state.balance]);

    return (
        <div>
            <h2>股價報價</h2>
            <div>Apple (AAPL) 當前價格: ${stocks['AAPL'].toFixed(2)}</div>
            <div>Misrosoft (MSFT) 當前價格: ${stocks['MSFT'].toFixed(2)}</div>
            <div>Google (GOOG) 當前價格: ${stocks['GOOG'].toFixed(2)}</div>
            
            <h2>股票交易</h2>
            <div>可用資金: ${state.balance.toFixed(2)}</div>
            <div>投資價值: $ 0.0</div>
            <div>即時獲利: $ 0.0</div>
            <div>
                股票下單:<br />
                <select value={selectedStock} onChange={e => setSelectedStock(e.target.value)}>
                    <option value="AAPL">Apple</option>
                    <option value="MSFT">Misrosoft</option>
                    <option value="GOOG">Google</option>
                </select>
                &nbsp;&nbsp;
                <input type="number" min="1" 
                        value={quantity} 
                        onChange={e => setQuantity(parseInt(e.target.value) || 0)} /> 股
                &nbsp;&nbsp;
                <button onClick={buyStock}>買進</button>
                &nbsp;&nbsp;
                <button>賣出</button>
            </div>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <h2>持有股票</h2>
            <div>
                {Object.entries(state.portfolio).map(([stockId, qty]) => (
                    <div key={stockId}>{stockId}: {qty} 股</div>
                ))}
            </div>
        </div>
    );
}

export default StockTradingApp;
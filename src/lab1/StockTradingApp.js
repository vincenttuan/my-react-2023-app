import React, { useCallback, useContext, useMemo, useReducer, useState } from "react";
import { StockContext } from "./StockProvider";
import portfolioReducer from "./StockReducer";

function StockTradingApp() {
    // 初始的可用資金
    const initialBalance = 10000;

    const stocks = useContext(StockContext); // 使用 useContext() 取得股價報價
    // dispatch 指的就是 action
    const [state, dispatch] = useReducer(portfolioReducer, {balance: initialBalance, portfolio: {}});
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
                // javascript es6 屬性名稱與賦值名稱相同時，可以簡略
                // {stockId: selectedStock, quantity: quantity, price: stocks[selectedStock]}
                // 改成
                // {stockId: selectedStock, quantity, price: stocks[selectedStock]}
                payload: {stockId: selectedStock, quantity, price: stocks[selectedStock]}
            });
            setError(''); // 清除錯誤訊息
        }

    }, [selectedStock, quantity, stocks, state.balance]);

    // 賣出股票
    const sellStock = useCallback(() => {
        const currentQuantity = state.portfolio[selectedStock] || 0;
        if(currentQuantity < quantity) {
            setError('持有的股票數量不足，無法賣出');
        } else {
            dispatch({
                type: 'sell',
                payload: {stockId: selectedStock, quantity, price: stocks[selectedStock]}
            });
            setError(''); // 清除錯誤訊息
        }

    }, [selectedStock, quantity, stocks, state.portfolio]);

    // 計算投資組合的總價值
    const totalValue = useMemo(() => {
        return Object.entries(state.portfolio).reduce((total, [stockId, qty]) => {
            return total + (stocks[stockId] || 0) * qty;
        }, 0);
    }, [state.portfolio, stocks]);

    // 模擬計算獲利效果
    const profit = (state.balance + totalValue) - initialBalance;
    
    return (
        <div>
            <h2>股價報價</h2>
            <div>Apple (AAPL) 當前價格: ${stocks['AAPL'].toFixed(2)}</div>
            <div>Misrosoft (MSFT) 當前價格: ${stocks['MSFT'].toFixed(2)}</div>
            <div>Google (GOOG) 當前價格: ${stocks['GOOG'].toFixed(2)}</div>
            
            <h2>股票交易</h2>
            <div>可用資金: ${state.balance.toFixed(2)}</div>
            <div>投資價值: ${totalValue.toFixed(2)}</div>
            <div>即時獲利: ${profit.toFixed(2)}</div>
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
                <button onClick={sellStock}>賣出</button>
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
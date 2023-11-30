// StockProvider 提供股票的價格
import React, { createContext, useEffect, useState } from "react";

// 用於儲存股票價格
// 在本系統中扮演「資料庫」的角色，他是全域的，所有的元件都可以存取
export const StockContext = createContext();

export function StockProvider({children}) {
    const [stocks, setStocks] = useState({AAPL: 150, MSFT: 250, GOOG: 2800});

    // 模擬股票價格的非同步更新
    useEffect(() => {
        const interval = setInterval(() => {
            // 有了展開運算子...，我們就可以只更新需要更新的股票價格
            // 其他的股票價格就會保持不變
            setStocks(currentStocks => ({
                ...currentStocks,
                AAPL: currentStocks.AAPL * (1 + (Math.random() - 0.5) / 10),
                MSFT: currentStocks.MSFT * (1 + (Math.random() - 0.5) / 10),
                GOOG: currentStocks.GOOG * (1 + (Math.random() - 0.5) / 10)
            }));
        }, 5000);
        return () => clearInterval(interval); // 清除計時器
    }, []);

    // {children} 指的就是在 FinApp.js 中的 <StockTradingApp />
    // 如此 StockTradingApp 就可以自由使用 StockProvider 的資源
    return <StockContext.Provider value={stocks}>{children}</StockContext.Provider>
} 

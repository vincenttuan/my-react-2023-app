// StockProvider 提供股票的價格
import React, { createContext, useEffect, useState } from "react";

// 用於儲存股票價格
// 在本系統中扮演「資料庫」的角色，他是全域的，所有的元件都可以存取
export const StockContext = createContext();

export function StockProvider({children}) {
    const [stocks, setStocks] = useState({APPL: 150, MSFT: 250, GOOG: 2800});

    // 模擬股票價格的非同步更新
    useEffect(() => {
        const interval = setInterval(() => {
            // 有了展開運算子...，我們就可以只更新需要更新的股票價格
            // 其他的股票價格就會保持不變
            setStocks(currentStocks => ({
                ...currentStocks,
                APPL: currentStocks.APPL * (1 + (Math.random() - 0.5) / 10),
                MSFT: currentStocks.MSFT * (1 + (Math.random() - 0.5) / 10),
                GOOG: currentStocks.GOOG * (1 + (Math.random() - 0.5) / 10)
            }));
        }, 5000);
        return () => clearInterval(interval); // 清除計時器
    }, []);

    return <StockContext.Provider value="{stocks}">{children}</StockContext.Provider>
} 

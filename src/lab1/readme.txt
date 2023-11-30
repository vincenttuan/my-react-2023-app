專題一：簡易版股票交易模擬系統
如何整合不同的 React Hooks 來建立一個功能豐富的股票交易模擬應用。
使用的 Hooks 說明：
useState: 在 StockProvider 中用於存儲和更新股票價格。
useEffect: 在 StockProvider 中用於模擬股票價格的異步更新。
useContext: 在 StockTradingApp 中使用，允許訪問股票價格數據。
useReducer: 在 StockTradingApp 中用於管理用戶的資產和投資組合。
useMemo: 在 StockTradingApp 中用於計算用戶投資組合的總價值。
useCallback: 在 StockTradingApp 中用於定義購買股票的回調函數，並避免不必要的重渲染。

這個範例展示了如何整合不同的 React Hooks 來建立一個功能豐富的股票交易模擬應用。
此應用展示了股票價格的實時變動，並允許用戶進行基本的股票交易操作。

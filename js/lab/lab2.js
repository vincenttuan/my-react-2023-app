// lab2.js
// 用於獲取股票報價並執行交易的範例腳本。
// 這個腳本為同學們提供了如何在JavaScript中模擬股票報價查詢與交易的操作，
// 幫助他們了解如何在程式中處理財務數據與非同步API呼叫。
// 假設我們有一個簡單的股票報價對象。
let stockQuotes = {
    'AAPL': 150.00,
    'GOOGL': 2750.00,
    'MSFT': 300.00
  };
  
  // 定義一個獲取股票報價的函數，使用Optional Chaining和Nullish Coalescing Operator處理可能的未定義情況。
  const getStockQuote = (quotes, ticker) => quotes?.[ticker] ?? '無法提供報價';
  
  // 定義一個執行股票交易的函數。
  const executeTrade = async (ticker, quantity, action) => {
    try {
      const quote = stockQuotes[ticker];
      if (!quote) throw new Error('未找到股票報價.');
  
      // 模擬交易的非同步操作，這裡僅為示例。
      // 在JavaScript中，await Promise.resolve(value)是一種模式，用來模擬非同步操作。
      const tradeResult = await Promise.resolve(`以 ${quote} 元 ${action} ${quantity} 股 ${ticker} 股票`);
      console.log(tradeResult);
      return tradeResult;
    } catch (error) {
      console.error(error);
    }
  };
  
  // 主執行流程，模擬股票交易流程。
  (async () => {
    console.log('正在取得股票報價...');
    console.log(`AAPL: ${getStockQuote(stockQuotes, 'AAPL')}`);
    console.log(`GOOGL: ${getStockQuote(stockQuotes, 'GOOGL')}`);
    
    console.log('執行交易...');
    await executeTrade('AAPL', 10, '買進');
    await executeTrade('GOOGL', 5, '賣出');
  })();
  

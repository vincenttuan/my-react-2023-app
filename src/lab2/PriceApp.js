import React, { useState, useEffect } from "react";
// 台灣證券交易所資料歷史交易資料
// https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20231130&stockNo=2330
// 因為台灣證券交易所不支援跨域請求，所以必須在 package.json 中設定代理伺服器 
function PriceApp() {
    const stockNo = '2330';
    const date = '20231130';
    const [jsonData, setJsonData] = useState(null); // 存放 json 資料數據
    // 當 stockNo 或 date 有變動時才會渲染
    useEffect(() => {
        const url = `/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${stockNo}`;

    }, [stockNo, date]);

    return (
        <div className="center-conatiner" style={{ padding: '15px' }}>
            <h2>歷史股價</h2>

        </div>
    )
}

export default PriceApp;
import React, { useState, useEffect } from "react";
// 台灣證券交易所資料歷史交易資料
// https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20231130&stockNo=2330
// 因為台灣證券交易所不支援跨域請求，所以必須在 package.json 中設定代理伺服器
// 預測股價:
// 回歸: http://localhost:8080/React-backend/predict?stockNo=2330&date=20231130&predict=regression
// Smile: http://localhost:8080/React-backend/predict?stockNo=2330&date=20231130&predict=smile

function PriceApp() {
    const stockNo = '2330';
    const date = '20231130';
    const [jsonData, setJsonData] = useState(null); // 存放 json 資料數據
    // 當 stockNo 或 date 有變動時才會渲染
    useEffect(() => {
        const url = `/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${stockNo}`;
        // 透過 fetch API 發送請求
        fetch(url)
            .then(response => {
                // 檢查是否成功 ?
                if(!response.ok) {
                    throw new Error("無法取得台灣證券交易所資料");
                }
                return response.json();
            })
            .then(jsonData => {

                const prodictPrice = 580.00;
                // 取得最後一筆收盤價格
                const lastClosingPrice = parseFloat(jsonData.data[jsonData.data.length - 1][6].replace(/,/g, ''))
                // 價差
                const priceChange = prodictPrice - lastClosingPrice;
                // 添加新的數據
                jsonData.data.push([
                    "預測",
                    "",
                    "",
                    "",
                    "",
                    "",
                    prodictPrice.toFixed(2), // 收盤價
                    priceChange.toFixed(2), // 漲跌價差
                    "",
                ]);
                setJsonData(jsonData);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

    }, [stockNo, date]); // 當 stockNo 或 date 有變動時才會渲染

    return (
        <div className="center-conatiner" style={{ padding: '15px' }}>
            <h2>歷史股價</h2>
            <pre>{jsonData && console.log(jsonData)}</pre>
            <p>代號：{stockNo}</p>
            <p>標題：{jsonData && jsonData.title}</p>
            <p>日期：{jsonData && jsonData.date}</p>
            <p>狀態：{jsonData && jsonData.stat}</p>
            {
                jsonData ? (
                    <table border="1" cellSpacing="0" cellPadding="5" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                {/* 這是用來顯示欄位名稱的表頭 */}
                                {jsonData.fields.map((field, index) => (
                                    <th key={index}>{field}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* 這是用來顯示資料的表格主體 */}
                            {jsonData.data.map((row, index) => (
                                <tr key={index}>
                                    {row.map((cell, cellIndex) => (
                                        // cellIndex = 0 置中對齊, > 0 右對齊, 程式碼如下
                                        <td key={cellIndex} style={{ textAlign: cellIndex === 0 ? 'center' : 'right' }}>
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (<p>Loading ...</p>)
            }

        </div>
    )
}

export default PriceApp;
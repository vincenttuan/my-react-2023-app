import React, { useState, useEffect } from "react";
import * as recharts from 'recharts'; // 要先安裝 npm install recharts

// 台灣證券交易所資料歷史交易資料
// https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20231130&stockNo=2330
// 因為台灣證券交易所不支援跨域請求，所以必須在 package.json 中設定代理伺服器
// 預測股價:
// 回歸: http://localhost:8080/React-backend/predict?stockNo=2330&date=20231130&predict=regression
// Smile: http://localhost:8080/React-backend/predict?stockNo=2330&date=20231130&predict=smile

function PriceApp() {
    const [stockNo, setStockNo] = useState('2330');
    const [date, setDate] = useState('2023-11-30');
    const [predict, setPredict] = useState('regression');

    const [jsonData, setJsonData] = useState(null); // 存放 json 資料數據
    
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

                // 創建一個新的非同步函式來預測價格
                const fetchPredictPrice = async() => {
                    const predictURL = `http://localhost:8080/React-backend/predict?stockNo=${stockNo}&date=${date}&predict=${predict}`
                    const response = await fetch(predictURL);
                    if(!response.ok) {
                        throw new Error('無法連到後端伺服器~');
                    }
                    const predictData = await response.json();
                    const prodictPrice = predictData.predictPrice;
                    console.log('預測價格: ', prodictPrice);
                    // 取得最後一筆收盤價格
                    const lastClosingPrice = parseFloat(jsonData.data[jsonData.data.length - 1][6].replace(/,/g, ''))
                    // 價差
                    const priceChange = prodictPrice - lastClosingPrice;
                    // 添加新的數據
                    jsonData.data.push([
                        "預測:" + predict,
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
                };
                // 調用非同步函數
                fetchPredictPrice();
                

            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

    }, [stockNo, date, predict]); // 當 stockNo, date 或 predict 有變動時才會渲染

    // 表單提交
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const stockNoInput = formData.get('stockNo');
        const dateInput = formData.get('date');
        // 日期不可以大於今天
        const today = new Date().toISOString().split('T')[0];
        if (dateInput > today) {
            alert('日期不可以大於今天');
            return;
        }
        // 將 dateInput 2023-10-31 轉換成 20231031 格式
        const dateInputFormat = dateInput.replace(/-/g, '');
        setStockNo(stockNoInput); // 更新 symbol 狀態
        setDate(dateInputFormat);
    };

    // 準備圖表資料
    const chartData = jsonData ? jsonData.data.map((item, index, arr) => {
        // 成交股數: 轉換為數字類型
        const volume = parseFloat(item[1].replace(/,/g, ''));
    
        // 收盤價: 轉換為數字類型
        const closePrice = parseFloat(item[6].replace(/,/g, ''));

        // 計算五日均線
        let average = null;
        if (index >= 4) {
            let sum = 0;
            for (let i = 0; i < 5; i++) {
                sum += parseFloat(arr[index - i][6].replace(/,/g, ''));
            }
            average = (sum / 5).toFixed(2); // 保留兩位小數
        }
    
        return {
            date: item[0],
            closePrice,
            volume,
            average // 新增五日均線數據
        };
    }) : [];
    

    // 計算 Y 軸的最小值與最大值
    const minClosePrice = chartData.length > 0 ? Math.min(...chartData.map(item => item.closePrice)) * 0.9 : 0;
    const maxClosePrice = chartData.length > 0 ? Math.max(...chartData.map(item => item.closePrice)) * 1.1 : 0;
   
    return (
        <div className="center-conatiner" style={{ padding: '15px' }}>
            <h2>資料輸入</h2>
            <form className="pure-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Form</legend>
                    <label>
                        股票代碼：
                        <input type="text" name="stockNo" defaultValue={stockNo} required />
                    </label>
                    &nbsp;&nbsp;
                    <label>
                        日期（如 2023-10-31）：
                        <input type="date" name="date" defaultValue={date} required />
                    </label>
                    &nbsp;&nbsp;
                    <label>
                        <input type="radio" name="predict" value="regression" defaultChecked onChange={(event) => setPredict(event.target.value)} /> 簡單回歸
                        <input type="radio" name="predict" value="smile" onChange={(event) => setPredict(event.target.value)} /> Smile 機器學習
                    </label>
                    &nbsp;&nbsp;
                    <button type="submit" className="pure-button pure-button-primary">查詢</button>
                    
                </fieldset>
            </form>

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
            <div style={{height: '50px'}} />
            <h2>股價走勢圖</h2>
            <div style={{ width: '100%', height: 500 }}>
                <recharts.ResponsiveContainer>
                    <recharts.ComposedChart
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <recharts.CartesianGrid strokeDasharray="3 3" />
                        <recharts.XAxis dataKey="date" />
                        <recharts.YAxis 
                            yAxisId="left"
                            domain={[minClosePrice, maxClosePrice]} // 設置收盤價的 Y 軸
                        />
                        <recharts.YAxis 
                            yAxisId="right" 
                            orientation="right" // orientation = right 表示是右側 Y 軸 
                        />
                        <recharts.Tooltip />
                        <recharts.Legend />

                        <recharts.Bar yAxisId="right" dataKey="volume" fill="#413ea0" name="成交股數"  />
                        
                        <recharts.Line 
                            yAxisId="left" 
                            type="monotone" 
                            dataKey="closePrice" 
                            stroke="#ff7300" 
                            name="收盤價" 
                            strokeWidth={3}
                            />

                        <recharts.Line 
                            yAxisId="left" 
                            type="monotone" 
                            dataKey="average" 
                            stroke="#8884d8" 
                            name="5日均線" 
                            strokeWidth={2}
                        />
   
                    </recharts.ComposedChart>
                </recharts.ResponsiveContainer>
            </div>

        </div>
    )
}

export default PriceApp;
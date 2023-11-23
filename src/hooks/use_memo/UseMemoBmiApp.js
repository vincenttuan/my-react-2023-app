import React, {useState, useMemo} from 'react'

// 假設一個很複雜的計算
function calculateBMI(weight, height) {
    console.log('正在計算 BMI ... ');
    // 模擬計算複雜度
    for(let i = 0; i< 1000000000; i++) {}
    const bmi  = weight / Math.pow(height/100, 2);
    console.log('BMI = ' + bmi);
    return bmi;
}

function BMICalculator() {
    const [weight, setWeight] = useState(60); // 體重 
    const [height, setHeight] = useState(170); // 身高
    const [name, setName] = useState(""); // 用戶名
    
    // 不使用 useMemo, 每一次當 state(name, weight, height ...) 有變化的時候都會被執行
    //const bmi = calculateBMI(weight, height);
    // 使用 useMemo
    // [weight, height] 是一個依賴陣列, 表示只有 weight, height 有變化時，才會執行計算
    const bmi = useMemo(() => calculateBMI(weight, height), [weight, height]); 

    return (
        <div>
            <h2>BMI 計算機</h2>
            <label>
                名稱: <input type="text" value={name} 
                            onChange={e => setName(e.target.value)} />
            </label>
            <p />
            <label>
                體重: <input type="number" value={weight} 
                            onChange={e => setWeight(parseFloat(e.target.value))} /> 公斤
            </label>
            <p />
            <label>
                身高: <input type="number" value={height} 
                            onChange={e => setHeight(parseFloat(e.target.value))} /> 公分
            </label>
            <p />
            <label>
                您的 BMI: 
                {
                    // 使用 Number.isFinite 來檢查 bmi 是否為有效數字(是否是一個有限數)
                    Number.isFinite(bmi) ? bmi.toFixed(2) : '尚無法計算'
                }
            </label>
        </div>
    );
}

export default BMICalculator;

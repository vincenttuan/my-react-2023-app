import React, { useState, useEffect} from 'react'

function UseEffect2App() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(true);

    useEffect(() => {
        console.log('UseEffect2App 註冊')
        let intervalId;
        if(isTimerActive) {
            // 啟動計時器
            intervalId = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
        }

        // 清除函數
        return() => {
            console.log('UseEffect2App 卸載');
            if(intervalId) {
                clearInterval(intervalId);
            }
        };

    }, [isTimerActive]); // 指定依賴

    // 停止計時器
    const stopTimer = () => {
        setIsTimerActive(false);
    };

    return (
        <div>
            <p>你點擊了 {count} 次</p>
            <button onClick={() => setCount(count + 1)} >點擊我</button>
            <p>計時器 {timer} 秒</p>
            <button onClick={stopTimer}>停止計時器</button>
        </div>
    );

}

export default UseEffect2App;


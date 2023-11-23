import React, {useState, useRef, useEffect} from 'react'

function CounterWithTimer() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(t => {
                console.log("計時器: " + t);
                return t + 1;
            })
        }, 1000);

        // 清理函數
        return () => clearInterval(intervalId);
    });

    return (
        <div>
            <h2>計數器: {count}</h2>
            <button onClick={() => setCount(count + 1)}>增加</button>
            &nbsp;&nbsp;
            <button onClick={() => setCount(count - 1)}>減少</button>
            <p />
            <h2>計時器: {timer}</h2>
        </div>
    );
}

export default CounterWithTimer;

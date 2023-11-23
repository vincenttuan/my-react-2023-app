import React, {useState, useRef, useEffect} from 'react'

function CounterWithTimer() {
    const [count, setCount] = useState(0);
    // 使用 useRef
    const timer = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // 不會觸發重新渲染, 除非 count 的內容有改變
            timer.current += 1;
            console.log("計時器: " + timer.current);
        }, 1000);

        // 清理函數
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>計數器: {count}</h2>
            <button onClick={() => setCount(count + 1)}>增加</button>
            &nbsp;&nbsp;
            <button onClick={() => setCount(count - 1)}>減少</button>
            <p />
            <h2>計時器: {timer.current}</h2>
        </div>
    );
}

export default CounterWithTimer;

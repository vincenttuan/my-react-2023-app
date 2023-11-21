import React, { useState, useEffect} from 'react'

function UseEffect2App() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(true);

    
    return (
        <div>
            <p>你點擊了 {count} 次</p>
            <button onClick={() => setCount(count + 1)} >點擊我</button>
            <p>計時器 {timer} 秒</p>
            <button>停止計時器</button>
        </div>
    );

}

export default UseEffect2App;


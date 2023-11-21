import Reactm, { useState } from "react";

function Counter() {
    const [countFunction, setCountFunction] = useState(0);
    const [countObject, setCountObject] = useState(0);
    
    // 函數形式更新（incrementFunction）：這裡使用了一個函數來獲取當前的計數器狀態（prevCount），
    // 然後基於這個值進行更新。這種方式確保了即使有多次快速的狀態更新，每次更新都是基於最新的狀態。
    const incrementFunction = () => {
        setCountFunction(preCount => preCount + 1);
        console.log(countFunction);
    }

    // 物件形式更新（incrementObject）：這裡直接使用了當前的 count 狀態來更新計數器。
    // 如果有多個這樣的更新快速連續發生，則每次更新都是基於當時 count 變數的值，這可能導致一些更新丟失，
    // 特別是在 React 批量處理狀態更新的情況下。
    const incrementObject = () => {
        setCountObject(countObject + 1);
        console.log(countObject);
    }

    return (
        <div>
            <h2>計數器(函數形式更新)</h2>
            <button onClick={incrementFunction}>函數形式更新</button>
            <div>{countFunction}</div>
            <p />
            <h2>計數器(物件形式更新)</h2>
            <button onClick={incrementObject}>物件形式更新</button>
            <div>{countObject}</div>
        </div>
    );

}
export default Counter;

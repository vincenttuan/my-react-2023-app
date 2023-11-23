import React, { useReducer } from "react";

// 此方法會在每次渲染時都會被調用
// 這裡的 state 是指 carReducer 的 state
// action 是 dispatch 的參數
// 透過 action.type 來決定要執行的邏輯
function carReducer(state, action) {
    switch(action.type) {
        case 'add':
            console.log('carReducer => add');
            break;
        case 'remove':
            console.log('carReducer => remove');
            break; 
        case 'clear':
            console.log('carReducer => clear');
            break;
        default:
            throw new Error('未知的動作');      
    }
}

function ShoppingCar() {

    // cart 是一個 state, 就是購物車商品列表
    // dispatch 是一個函式, 用來發送 action
    // action 有一個 type 屬性, 用來指定要執行哪些邏輯 ?
    // type 包含: add, remove, clear
    const [cart, dispatch] = useReducer(carReducer, []);

}

export default ShoppingCar;

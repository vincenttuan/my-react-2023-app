import React, { useReducer } from "react";

// 格式化價格
function formatPrice(price) {
    return new Intl.NumberFormat('zh-TW', {
        style: 'decimal', maximumFractionDigits: 1 // 保留小數點的位數
    }).format(price);
}

// 此方法會在每次渲染時都會被調用
// 這裡的 state 是指 carReducer 的 state
// action 是 dispatch 的參數
// 透過 action.type 來決定要執行的邏輯
function carReducer(state, action) {
    switch(action.type) {
        case 'add':
            console.log('carReducer => add');
            // 檢查商品id是否有在購物車中
            const existingItem = state.find(item => item.id === action.product.id);
            // 如果商品已經存在
            if(existingItem) {
                // 找到該商品並將數量 + 1
                return state.map(item => 
                    item.id === action.product.id ?
                            {...item, quantity: item.quantity + 1} : item
                );
            }
            // 如果商品已經存在不存在就直接添加到購物車
            return [...state, {...action.product, quantity: 1}];
            
        case 'remove':
            // 移除商品
            console.log('carReducer => remove');
            // 利用 filter 來將不要的商品 id 剔除
            return state.filter(item => item.id !== action.product.id);
        case 'clear':
            // 清空商品
            console.log('carReducer => clear');
            return [];
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

    // 商品列表
    const products = [
        {id: 1, name: '產品 A', price: 100},
        {id: 2, name: '產品 B', price: 200},
        {id: 3, name: '產品 C', price: 300}
    ];

    // 新增至購物車
    function addToCart(product) {
        dispatch({type: 'add', product});
    }

    // 購物車所有商品的總價
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div>
            <h2>商品列表</h2>
            {
                products.map(product => (
                    <div key={product.id}>
                        {product.name} - ${product.price}
                        &nbsp;&nbsp;
                        <button onClick={() => addToCart(product)}>添加到購物車</button>
                    </div>
                ))
            }
            <h2>購物車列表</h2>
            {
                cart.map(item => (
                    <div key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        &nbsp;&nbsp;
                        (小計: ${formatPrice(item.price * item.quantity)})
                        &nbsp;&nbsp;
                        <button onClick={() => dispatch({type: 'remove', product: item})}>刪除</button>
                    </div>
                ))
            }
            <p />
            {
                cart.length > 0 && (
                    <div>總價: ${formatPrice(totalPrice)}</div>
                )
            }
            <p />
            {
                cart.length > 0 && (
                    <button onClick={() => dispatch({type: 'clear'})}>清空購物車</button>
                )
            }
            &nbsp;&nbsp;
            {
                cart.length > 0 && (
                    <button onClick={() => alert(JSON.stringify(cart))}>
                        購物車 Json 字串
                    </button>
                )
            }
        </div>
    );
}

export default ShoppingCar;

import React, { useState, useCallback } from 'react'

const initialProducts = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 150 },
    { name: 'Keyboard', price: 100 }
];

function ShoppingApp() {
    // 商品資料狀態
    const [products] = useState(initialProducts);
    // 篩選條件狀態
    const [filter, setFilter] = useState('');

    // 使用 useCallback 來記憶過濾函數
    // 當 products, filter 發生改變的時候, 才會重新創建 filterProducts 函式
    // 使用 useCallback 與不使用的差別在於，當 filterProducts 被呼叫時，如果使用 useCallback，
    // 則會從記憶體中取得 filterProducts 函數，
    // 這樣就可以避免每次重新渲染時，都重新建立一個新的 filterProducts 函數。
    // 但是，如果不使用 useCallback，則每次重新渲染時，都會重新建立一個新的 filterProducts 函數。
    const filterProducts = useCallback(() => {
        // 價格 <= 篩選條件的產品才會被回傳
        return products.filter(product => product.price <= filter);
    }, [products, filter]);

    return (
        <div>
            <h2>所有商品資訊</h2>
            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>
                            {product.name} - ${product.price}
                        </li>
                    ))
                }
            </ul>
            <h2>過濾商品價格</h2>
            價格過濾：
            <input type="number" value={filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {
                    filterProducts().map((product, index) => (
                        <li key={index}>{product.name} - ${product.price}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ShoppingApp;

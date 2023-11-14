import React from 'react'

/**
 * JSX 基礎範例一：（JSX Shopping Demo）
 * 它展示了如何在日常生活中的一個購物清單應用中使用數字、字串、陣列、迴圈和表格：
 */
function JSXShoppingDemo() {
    // 字串
    const title = "我的購物清單";

    // 數字
    const budget = 1000;

    // 陣列
    const items = [
        {id: 1, name: '牛奶', price: 100},
        {id: 2, name: '麵包', price: 80},
        {id: 3, name: '蘋果', price: 120},
    ];

    // 透過 reduce 計算總花費
    const totalCost = items.reduce((total, item) => total + item.price, 0);

    // 迴圈 - 映射陣列到表格中
    const tableRows = items.map(
        item => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        )
    );

    return (
        <div>
            <h2>{title}</h2>
            預算: ${budget}<p />
            總花費: ${totalCost}<p />
            <table>
                <thead>
                    <tr><th>id</th><th>項目</th><th>價格</th></tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    );
}

export default JSXShoppingDemo;
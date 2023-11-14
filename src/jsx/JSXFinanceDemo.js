import React from 'react'

/**
 * 以下是一個名為 JSXFinanceDemo.js 的 React 組件範例，
 * 它用於展示一個簡單的金融交易記錄，包含數字、字串、陣列、布林值判斷、迴圈和表格：
 */
function JSXFinanceDemo() {
    // 字串
    const username = 'Alex';

    // 數字
    const accountBalance = 9500;

    // 陣列
    const transactions = [
        {id: 1, type: '存款', amount: 5000, isCompleted: true},
        {id: 2, type: '存款', amount: 4000, isCompleted: false},
        {id: 3, type: '提款', amount: 3000, isCompleted: true},
        {id: 4, type: '存款', amount: 2000, isCompleted: true},
        {id: 5, type: '提款', amount: 1000, isCompleted: false},
    ];

    // 布林判斷 - 檢查是否所有交易都已經完成
    const allTransactionsCompleted = transactions.every(transactions => transactions.isCompleted);

    // 迴圈 - 映射交易記錄到表格
    const transactionRows = transactions.map(
        tx => (
            <tr key={tx.id}>
                <td>{tx.id}</td>
                <td>{tx.type}</td>
                <td>{tx.amount}</td>
                <td>{tx.isCompleted ? '是' : '否'}</td>
            </tr>
        )
    );

    return (
        <div>
            <h2>{username} 的交易紀錄</h2>
            帳戶餘額: ${accountBalance}<p />
            所也交易紀錄是否都完成: {allTransactionsCompleted ? '是' : '否'} <p />
            <table>
                <thead>
                    <th>交易序號</th><th>交易類型</th><th>交易金額</th><th>交易完成</th>
                </thead>
                <tbody>
                    {transactionRows}
                </tbody>
            </table>
        </div>
    );
}

export default JSXFinanceDemo;
/**
 * 練習題目：創建一個個人消費記錄組件

 * 背景信息：
 * 您正在開發一個簡單的 React 應用程序，用於顯示個人的消費記錄。這個應用程序將顯示用戶的名稱、賬戶餘額，
 * 以及一系列的消費交易記錄。每一筆交易記錄包括交易的序號、類型（例如「食品」、「交通」或「娛樂」）、金額
 * 和一個表示該交易是否已經完成的布林值。

 * 任務要求：
 * 創建一個名為 PersonalExpenseTracker 的 React 函式組件。
 * 在組件內部，定義以下變數：
 * username：用戶名稱，類型為字串。
 * accountBalance：賬戶餘額，類型為數字。
 * transactions：一個包含多個交易記錄的陣列。每筆交易記錄應該是一個包含 id（數字）、type（字串）、amount（數字）、isCompleted（布林值）的物件。
 * 使用 map 函數創建一個交易記錄的表格。每筆交易應該在表格的一行中顯示其 id、type、amount 和 isCompleted 狀態（用「是」或「否」表示）。
 * 若該筆交易沒有完成該列的文字要顯示為紅色。
 * 在組件的返回值中，包括以下元素：
 * 一個顯示用戶名稱的標題。
 * 一個顯示賬戶餘額的段落。
 * 交易記錄的表格。

 */
import React from 'react'

function PersonalExpenseTracker() {
    // 定義用戶名稱
    const username = 'Chris';

    // 定義帳戶餘額
    const accountBalance = 8000;

    // 定義交易記錄數據
    const transactions = [
        {id: 1, type: '食品', amount: 120, isCompleted: true},
        {id: 2, type: '交通', amount: 50, isCompleted: true},
        {id: 3, type: '娛樂', amount: 200, isCompleted: false},
    ];

    // 計算交易總金額
    const totalAmount = transactions.reduce((total, tx) => total + tx.amount, 0);

    // 格式化數字
    const formatNumber = (number) => {
        //return new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR'}).format(number);
        //return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(number);
        return new Intl.NumberFormat('zh-TW', {style: 'currency', currency: 'TWD'}).format(number);
    };

    // 使用 map 來創建表格紀錄列
    const transactionsRows = transactions.map(
        tx => (
            <tr key={tx.id} style={{color: tx.isCompleted ? 'black' : 'red'}}>
                <td>{tx.id}</td>
                <td>{tx.type}</td>
                <td>${tx.amount}</td>
                <td>{tx.isCompleted ? '是' : '否'}</td>
            </tr>
        )
    );

    return (
        <div>
            <h2>{username} 的交易紀錄</h2>
            帳戶餘額: {formatNumber(accountBalance)} <p />
            <table>
                <thead>
                    <tr>
                        <th>交易序號</th>
                        <th>交易類型</th>
                        <th>交易金額</th>
                        <th>交易完成</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsRows}
                </tbody>
                <tr>
                    <td colSpan="4"><hr /></td>
                </tr>
                <tfoot>
                    <tr>
                        <td colSpan="2">總計</td>
                        <td>${totalAmount}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default PersonalExpenseTracker;

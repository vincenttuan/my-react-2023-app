import React from "react";
import ListUI from "./ListUI";
// 利用 Table 來呈現列表，加入總和計算，加入分組

function ListTableGroupUI({products}) {

    // 分組並計算每個商品代號的數量總和
    const groupedProducts = products.reduce((acc, product) => {
        const amount = parseInt(product.amount);
        // acc 累加器
        if(acc[product.symbol]) {
            acc[product.symbol] += amount;
        } else {
            acc[product.symbol] = amount;
        }
        return acc;
    }, {}); // {} 初始值

    // 計算總和
    const totalAmount = products.reduce((sum, product) => sum + parseInt(product.amount), 0);

    return (
        <div>
            <h2>金融商品列表(Table + Group(分組))</h2>
            <table border="1">
                <thead>
                    <tr><th>商品代號</th><th>數量</th></tr>
                </thead>
                <tbody>
                    {
                        Object.entries(groupedProducts).map(([symbol, amount]) => (
                            <tr key={symbol}>
                                <td>{symbol}</td><td>{amount}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>總計</td>
                        <td>{totalAmount}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default ListTableGroupUI;
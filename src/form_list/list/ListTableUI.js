import React from "react";
import ListUI from "./ListUI";
// 利用 Table 來呈現列表，並加入總和計算

function ListTableUI({products}) {

    // 計算總和
    const totalAmount = products.reduce((sum, product) => sum + parseInt(product.amount), 0);

    return (
        <div>
            <h2>金融商品列表(Table)</h2>
            <table border="1">
                <thead>
                    <tr><th>ID</th><th>商品代號</th><th>數量</th></tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.symbol}</td>
                                <td>{product.amount}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" align="right">總計</td>
                        <td>{totalAmount}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default ListTableUI;
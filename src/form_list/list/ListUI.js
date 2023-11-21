import React from "react";

function ListUI({products}) {
    return (
        <div>
            <h2>金融商品列表(List)</h2>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            {product.symbol} {product.amount}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ListUI;
import React, { useState, useCallback } from 'react'

const initialProducts = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 150 },
    { name: 'Keyboard', price: 100 }
];

function ShoppingApp() {
    const [products] = useState(initialProducts);

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
        </div>
    );
}

export default ShoppingApp;

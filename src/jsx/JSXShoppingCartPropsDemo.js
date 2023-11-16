// 屬性展開：可以使用...運算符將一個對象的所有屬性作為props傳達給JSX元素。
import React from "react";

function Product({title, price, ...props}) {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <hr />
            {/* 展示 props 裡面的其他內容 */}
            <div>
                {
                    Object.keys(props).map(key => 
                        <p key={key}>{`${key}: ${props[key]}`}</p>)
                }
            </div>
        </div>
    );
}

function JSXShoppingCartPropsDemo() {
    const products = [
        {
            id: '001',
            className: 'product1',
            flag: true,
            title: "手工香皂",
            price: "10.99"
        },
        {
            id: '002',
            className: 'product2',
            flag: true,
            title: "洗面乳",
            price: "5.99"
        },
        {
            id: '003',
            className: 'product3',
            flag: false,
            title: "洗衣精",
            price: "15.99"
        },
    ];
    return (
        <div>
            {
                products.map(product => (
                    <Product key={product.id} {...product} />
                ))
            }
        </div>
    );       
}

export default JSXShoppingCartPropsDemo;

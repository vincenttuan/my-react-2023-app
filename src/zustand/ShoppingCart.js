import React from "react";
import useStore from "./MyStore";

const ShoppingCart = () => {
    // 使用 useStore 來獲取購物車內容與操作函數
    const cart = useStore(state => state.cart);
    const addProduct = useStore(state => state.addProductToCart);
    const removeProduct = useStore(state => state.removeProductFromCart);

    // 產品列表
    const products = [
        { id: 1, name: '產品一', price: 100},
        { id: 2, name: '產品二', price: 200},
        { id: 3, name: '產品三', price: 300},
        { id: 4, name: '產品四', price: 400},
        { id: 5, name: '產品五', price: 500},
    ];

    return (
        <div>
            {/** 顯示購物車已有此商品 */}
            {
                useStore(state => state.productExists) && <div style={{color: 'red'}}>產品已存在購物車中</div>
            }

            <h2>購物車列表</h2>
            {
                cart.map(product => (
                    <div key={product.id}>
                        <span>{product.name} ${product.price}</span>
                        <button onClick={() => removeProduct(product.id)}>移除</button>
                    </div>
                ))
            }

            <h2>產品列表</h2>
            {
                products.map(product => (
                    <div key={product.id}>
                        <span>{product.name} ${product.price}</span>
                        <button onClick={() => addProduct(product)}>加入購物車</button>
                    </div>
                ))
            }
        </div>
    );
}

export default ShoppingCart;
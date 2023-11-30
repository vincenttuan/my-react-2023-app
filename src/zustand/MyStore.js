// 安裝: npm install zustand
// 卸載: npm uninstall zustand
import { create } from "zustand";

const useStore = create(set => ({
    cart: [], // 購物車項目內容狀態
    productExists: false, // 來追蹤產品是否存在的狀態
    addProductToCart: product =>
        set(state => {
            const productExists = state.cart.some(p => p.id === product.id);
            if(productExists) {
                return {...state, productExists: true};
            } else {
                return { cart: [...state.cart, product], productExists: false};
            }
        }),
    removeProductFromCart: productId => 
        set(
            state => (
                {
                    cart: state.cart.filter(p => p.id !== productId), 
                    productExists: false
                }
            )
        ),
}));

export default useStore;

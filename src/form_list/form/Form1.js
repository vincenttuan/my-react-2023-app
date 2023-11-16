import React from "react";
import FormUI from "./FormUI";

class Form1 extends React.Component {
    constructor(props) {
        super(props);
        // 設定 state 的初始資料
        this.state = {
            symbol: '',
            amount: ''
        };
    }

    // 處理 onSymbolChange, 處理商品代號變化
    // e.target 指的就是商品代號輸入匡<input>物件
    handleSymbolChange = (e) => {
        this.setState({symbol: e.target.value})
    };

    // 處理 onAmountChange, 處理商品數量變化
    // e.target 指的就是商品數量輸入匡<input>物件
    handleAmountChange = (e) => {
        this.setState({amount: e.target.value})
    };

    // 處理表單提交 onSubmit
    handleSubmit = (e) => {
        e.preventDefault(); // 暫時不將資料送出
        const product = {symbol: this.state.symbol, amount: this.state.amount};
        // 此時就可以將 product 送到雲端伺服器中
        console.log('送出資料: ', product);
    };

    // 使用 FormUI 組件渲染表單
    render() {
        return (
            <FormUI 
                symbol = {this.state.symbol}
                amount = {this.state.amount}
                onSymbolChange = {this.handleSymbolChange}
                onAmountChange = {this.handleAmountChange}
                onSubmit = {this.handleSubmit}
            />
        );
    }
}

export default Form1;
import React from "react";
import FormUI from "./FormUI";

class Form2 extends React.Component {
    constructor(props) {
        super(props);
        // 設定 state 的初始資料
        this.state = {
            formData: {symbol: '', amount: ''}
        };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        // 函數式更新
        this.setState(prevState => ({
            formData: {...prevState.formData, [name]: value}
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('送出資料: ', this.state.formData);
    };

    render() {
        const {formData} = this.state;
        return (
            <FormUI 
                symbol = {formData.symbol}
                amount = {formData.amount}
                onSymbolChange = {this.handleChange}
                onAmountChange = {this.handleChange}
                onSubmit = {this.handleSubmit}
            />
        );
    }

}

export default Form2;
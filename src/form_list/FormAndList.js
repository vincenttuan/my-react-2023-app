// 表單與列表之間的互動與計算，排序
import React from "react";
import FormUI from './form/FormUI'
import ListUI from './list/ListUI'
import ListTableUI from './list/ListTableUI'
import ListTableGroupUI from "./list/ListTableGroupUI";

class FormAndList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {symbol:'', amount: 0},
            products: []
        }
    }

    // 處理表單欄位變化
    handleFromChange = (e) => {
        const {name, value} = e.target;
        this.setState(prevState => ({
            form: {...prevState.form, [name]: value}
        }))
    };

    // 處理表單提交(表單的資料會放到列表中)
    handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: this.state.products.length,
            symbol: this.state.form.symbol,
            amount: this.state.form.amount
        };
        this.setState(prevState => ({
            products: [...prevState.products, newProduct],
            form: {symbol: '', amount:'0'} // 表單還原預設狀態
        }))
    };

    render() {
        const {form, products} = this.state;
        return (
            <div>
                <FormUI
                    amount={form.amount}
                    symbol={form.symbol}
                    onSymbolChange={this.handleFromChange}
                    onAmountChange={this.handleFromChange}
                    onSubmit={this.handleSubmit}
                />
                <ListUI products={products} />
                <ListTableUI products={products} />
                <ListTableGroupUI products={products} />
            </div>
        );
    }
}

export default FormAndList;

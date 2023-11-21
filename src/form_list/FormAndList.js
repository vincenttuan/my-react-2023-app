// 表單與列表之間的互動與計算，排序
import React from "react";
import FormUI from './form/FormUI'
import ListUI from './list/ListUI'

class FormAndList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {symbol:'', amount: 0},
            products: []
        }
    }

    render() {
        const {form, products} = this.state;
        return (
            <div>
                <FormUI
                    amount={form.amount}
                    symbol={form.symbol}
                />
                <ListUI products={products} />
            </div>
        );
    }
}

export default FormAndList;

// 類別元件（Class Components）：這是使用 ES6 的 class 來創建的元件，它們擴展了 React.Component 
// 並提供了更多功能，例如生命周期方法和內部狀態。
// 與方法元件（Functional Components）不同的是, 類別元件可以使用 state 來管理元件的狀態

import React, {Component} from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        // 自定義 state 的結構
        // 將 {isLoggedIn: props.isLoggedIn} 指派給 state
        this.state = {isLoggedIn: props.isLoggedIn}
    }
    render() {
        // state 的值可以透過 this.state 來取得
        const isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn) {
            return <h1>歡迎光臨 使用者 !</h1>
        } else {
            return <h1>請先登入 !</h1>
        }
    }
}

function ClassApp() {
    return (
        <>
            <UserGreeting isLoggedIn={true} />
            <hr />
            <UserGreeting isLoggedIn={false} />
        </>
    );
}

export default ClassApp;
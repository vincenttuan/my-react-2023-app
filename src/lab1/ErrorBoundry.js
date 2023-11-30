import React from "react";

// ErrorBoundary 錯誤邊界只能使用在 class component
// 並且只能捕捉到子元件的錯誤，無法捕捉到自己的錯誤
// 可以使用 static getDerivedStateFromError() 來捕捉子元件的錯誤
// 捕捉的是 javascript 的錯誤，而不是 React 的錯誤

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: null};
    }

    // 捕捉子元件的錯誤
    static getDerivedStateFromError(error) {
        return {hasError: true, error};
    }

    // 紀錄錯誤訊息（於開發環境中使用）
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary: ", error, errorInfo);
    }

    // 渲染自定義錯誤訊息 UI
    render() {
        if(this.state.hasError) {
            return <div style={{color: 'red'}}>發生錯誤: {this.state.error.toString()}</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
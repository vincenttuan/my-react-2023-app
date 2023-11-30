import React, { useState } from "react";
import ReactDOM from 'react-dom'

function AlertBox({onClose}) {
    return ReactDOM.createPortal(
        <div className="alert-box">
            <p>這是一個警告視窗</p>
            <button onClick={onClose}>關閉</button>
        </div>,
        document.body
    );
}

function PortalAlertApp() {
    const [showAlert, setShowAlert] = useState(false);
    return (
        <div>
            <h2>我的 App</h2>
            <button onClick={() => setShowAlert(true)}>顯示警告視窗</button>
            {showAlert && <AlertBox onClose={() => setShowAlert(false)} />}
        </div>
    );
}

export default PortalAlertApp;
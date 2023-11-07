import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Foo from './Foo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Foo />
  </React.StrictMode>
);

const sendToServer = prefEntity => {
  fetch('http://localhost:8080/React-backend/pref', {
    method: 'POST',
    body: JSON.stringify(prefEntity),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//reportWebVitals(sendToServer);

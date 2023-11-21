import React from 'react'
import userdata from './userdata.json'

function GetJsonData() {
    // 直接從 JSON 文件中讀取數據
    const [users] = userdata;

    // 渲染表格
    const renderUsersTable = () => (
        <table border="1">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>username</th>
                    <th>password</th>
                    <th>level</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.level}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    );
    return (
        <div>
            <h2>使用者資料</h2>
            {renderUsersTable}
        </div>
    );
}

export default GetJsonData;

import React, {useState} from 'react'
import myuserdata from './userdata.json'

function GetJsonData() {
    // 使用者數據
    const {users} = myuserdata;
    /*
    const [users] = useState([
        { userId: 101, username: 'user123', password: 'pass123', level: 1 },
        { userId: 102, username: 'user456', password: 'pass456', level: 2 },
        { userId: 103, username: 'user789', password: 'pass789', level: 1 }
    ]);
    */

    // 渲染表格
    // 渲染使用者表格
    const renderUsersTable = () => (
        <table>
            <thead>
                <tr>
                    <th>使用者ID</th>
                    <th>使用者名稱</th>
                    <th>密碼</th>
                    <th>等級</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.userId}>
                        <td>{user.userId}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.level}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div>
            <h2>使用者資料</h2>
            {renderUsersTable()}
        </div>
    );
}

export default GetJsonData;

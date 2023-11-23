import React, { useContext } from 'react'
import UserContext from './UserContext'

function Header() {
    // 取得 user 與 setUser, 來自 UserContext.Provider 的 value
    const { user } = useContext(UserContext);

    return (
        <div>
            { user.loggedIn ? <p>歡迎光臨</p> : <p>請登入</p> }
        </div>
    );
}

export default Header;
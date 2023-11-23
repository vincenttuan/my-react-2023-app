import React, { useState, useEffect } from 'react'
import Header from './Header';
import UserContext from './UserContext'

function UserContextApp() {

    const [user, setUser] = useState({loggedIn: true})

    useEffect(() => {
        console.log('UserContextApp useEffect');
        const intervalId = setInterval(() => {
            setUser(prevUser => ({loggedIn: !prevUser.loggedIn}))
        }, 1000);

        // 清理函數
        return () => {
            console.log('UserContextApp useEffect cleanup');
            clearInterval(intervalId);
        }

    }, []); // 空依賴數組 [] 表示這個效果只在組件掛載時運行一次

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Header />
        </UserContext.Provider>
    );
}

export default UserContextApp;

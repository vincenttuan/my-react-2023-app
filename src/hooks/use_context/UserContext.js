import React from 'react'

// 建立一個 Context 物件, 目的是讓子元件可以透過 useContext 取得 value
const UserContext = React.createContext(null);

export default UserContext;
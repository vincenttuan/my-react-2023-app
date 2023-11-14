// 這個組件將顯示一個菜單列表
// 我們將使用 CustomComponent 來渲染菜單列表, 並將菜單數據作為 children 傳入, 
// 這樣CustomComponent就可以渲染菜單列表了
import React from "react";

function CustomComponent({render}) {
    //return <div>render()</div>;
    return render();
}

function JSXMenuListDemo() {
    // 有一個 menu 的數據列表, 每一個項目當有一個 id 與一個名稱
    const menuItems = [
        { id: 1, name: '紅燒牛肉麵' },
        { id: 2, name: '宮保雞丁' },
        { id: 3, name: '麻婆豆腐'},
        { id: 4, name: '蔥油餅' },
        { id: 5, name: '炒麵'},
        { id: 6, name: '炒飯'},
        { id: 7, name: '炒青菜'},
        { id: 8, name: '炒時蔬'},
        { id: 9, name: '炒花枝'},
        { id: 10, name: '炒蛤蜊'},
        { id: 11, name: '炒蝦仁'},
        { id: 12, name: '炒蛋'}  
    ];

    // 用戶數據
    const users = [
        {id: 1, username: 'Alice', age:30},
        {id: 2, username: 'Bob', age:24},
        {id: 3, username: 'Coco', age:28},
    ];

    return (
        <>
            <h2>Menu List</h2>
            <CustomComponent render={() => 
                menuItems.map(item => (
                    // Key 屬性是 React 用來識別元素的一標識, 通常是數據的 id
                    <div key={item.id}>{item.name}</div>
                ))
            } />
            <p />
            {
                menuItems.map(item => (
                    <CustomComponent key={item.id} render={() => <div>{item.name}</div>} />
                ))
            }
            <h2>User List</h2>
            <CustomComponent render={() => 
                users.map(user => (
                    <div key={user.is}>
                        <strong>{user.username}</strong> - 年齡: {user.age}
                    </div>
                ))
            } />
        </>
    );
}

export default JSXMenuListDemo;

import React from "react";

function SpicyIcon({level}) { // 客製化元件(CustomComponent)
    // 根據 level 來生成辣椒圖標的數量
    // Emoji 鍵盤或表情符號面板
    // 在 Windows上，您可以使用Win + .或Win + ;快捷鍵。
    // 在 macOS上，使用Ctrl + Cmd + Space快捷鍵。
    return <>{'🌶'.repeat(level)}</>
    //return <>{'\u{1F336}'.repeat(level)}</>
}

function MenuItem({item}) { // 客製化元件(CustomComponent)
    return (
        <div key={item.id}>
            {item.name} {item.spicy > 0 && <SpicyIcon level={item.spicy} />}
        </div>
    );
}

function JSXMenuListSpicyDemo() {
    // 這是我們菜單的數據，每個項目有一個id和一個名稱
    const menuItems = [
        { id: 1, name: '紅燒牛肉麵', spicy: 2},
        { id: 2, name: '宮保雞丁', spicy: 2},
        { id: 3, name: '麻婆豆腐', spicy: 3},
        { id: 4, name: '蔥油餅', spicy: 0 },
        { id: 5, name: '炒麵', spicy: 0},
        { id: 6, name: '炒飯', spicy: 0},
        { id: 7, name: '炒青菜', spicy: 0},
        { id: 8, name: '炒時蔬', spicy: 0},
        { id: 9, name: '炒花枝', spicy: 1},
        { id: 10, name: '炒蛤蜊', spicy: 1},
        { id: 11, name: '炒蝦仁', spicy: 0},
        { id: 12, name: '炒蛋', spicy: 0}
    ];
    return (
        <>
            <h2>菜單列表</h2>
            {
                // 使用 MenuItem 自訂組件的好處
                // 1. 可以將菜單項目的渲染邏輯封裝起來
                // 2. 讓程式碼更簡潔
                menuItems.map(item => (
                   <MenuItem key={item.id} item={item} /> 
                ))
            }
        </>
    );
}

export default JSXMenuListSpicyDemo;
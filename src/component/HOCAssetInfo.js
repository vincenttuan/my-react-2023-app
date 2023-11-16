/**
 * 有效地運用高階組件（HOC）的好處。
 * 這個例子中的 withCreditScore 高階組件展示了如何使用 HOC 來增強現有組件。
 * 在例子中，withCreditScore 將相同的額外功能（顯示信用分數）應用於兩個不同的組件：
 * AssetComponent 和 InfoComponent。
 * 
 * 說明如何利用 HOC 的優勢的：
 * 重用邏輯：withCreditScore 封裝了從 API 獲取信用分數的邏輯，並將其添加到任何傳入的組件。這允許您重用相同的邏輯而無需重複代碼。
 * 不改變原始組件：HOC 通過返回一個新組件來增強組件功能，而不需要修改原始組件本身。這意味著 AssetComponent 和 InfoComponent 都保持了其原始的單一責任，同時可以通過 HOC 獲得新的功能。
 * 組合性：HOC 支持組件的組合性。在例子中，withCreditScore 可以與任何組件結合使用，這意味著您可以將它應用到應用中的任何組件上，而不僅僅是 AssetComponent 和 InfoComponent。
 * 可維護性：由於 HOC 將共享邏輯封裝在一個地方，如果未來需要更新或修改該邏輯，您只需在 HOC 中進行更改，而不需要在多個組件中逐一修改。
 * 此範例說明了如何利用 HOC 來增強多個組件，這是一個在 React 開發中常見且有用的模式。這樣的模式使得代碼更加乾淨、可維護，並促進了組件之間的邏輯重用。
 */

// 資產組件(基本組件)
function AssetComponent({assets}) {
    return (
        <div>
            <h2>用戶資產</h2>
            {
                assets.map(asset => (
                    <p key={asset.id}>{asset.type}: {asset.value} 元</p>
                ))
            }
        </div>
    );
}

// 訊息組件(基本組件)
function InfoComponent({infos}) {
    return (
        <div>
            <h2>用戶資料</h2>
            {
                infos.map(info => (
                    <p key={info.id}>{info.type}: {info.value}</p>
                ))
            }
        </div>
    );
}

// 信用組件（高階組件 HOC）
function withCreditScore(WrappedComponent) {
    // 返回一個新的組件, 稱為 EnhancedComponent
    return function EnhancedComponent(props) {
        // 模擬從遠端 API 獲取信用分數
        const creditScore = 750;

        return (
            <div>
                {/** 渲染傳入的組件, 並將所有接收到的 props 傳遞給它 */}
                <WrappedComponent {...props} />
                {/** 額外渲染的信用分數資料 */}
                <div style={{color: 'red'}}>信用分數: {creditScore}</div>
            </div>
        );
    };
}

// 使用高階組件
const EnhanceAssetComponent = withCreditScore(AssetComponent);
const EnhanceInfoComponent = withCreditScore(InfoComponent);

function HOCAssetInfo() {
    const userAssets = [
        {id: 1, type: '存款', value: '10000'},
        {id: 2, type: '股票', value: '5000'},
    ];
    
    const userInfos = [
        {id: 1, type: '名字', value: 'John'},
        {id: 2, type: '等級', value: '10'},
    ];

    return (
        <>
            <EnhanceAssetComponent assets={userAssets} />
            <EnhanceInfoComponent infos={userInfos} />
        </>
    );

}

export default HOCAssetInfo;


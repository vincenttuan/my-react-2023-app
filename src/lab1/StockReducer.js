// 此程式是股票交易應用程式的 reducer，用於處理購買和出售股票的動作
// reducer 是指接收當前狀態和動作，返回新狀態的純函數
// state(狀態): balance (用戶當前餘額)、portfolio (用戶目前持有的部位-持有股票)
// action(動作): 
//    - type (包含："buy"、"sell") 、
//    - payload（下單的資料）包括：stockId（股票代號）、quantity（買賣數量）、price（買賣價格）

function portfolioReducer(state, action) {
    const {stockId, quantity, price} = action.payload;
    const currentQuantity = state.portfolio[stockId] || 0;
    const cost = price * quantity;
    switch(action.type) {
        case 'buy':
            // 是否有足夠的餘額可以買進
            if(state.balance >= cost) {
                return {
                    ...state,
                    balance: state.balance - cost,
                    // 合併到該 stockId 部位股數的數量
                    portfolio: {
                        ...state.portfolio,
                        [stockId]: currentQuantity + quantity
                    }
                }
            }
            // 當條件不滿足時，維持當前的狀態
            return state;
        case 'sell':  
            // 部位中是否有足夠的股數可以賣出
            if(currentQuantity >= quantity) {
                return {
                    ...state,
                    balance: state.balance + cost,
                    portfolio: {
                        ...state.portfolio,
                        [stockId]: currentQuantity - quantity
                    }
                }
            }
            // 當條件不滿足時，維持當前的狀態
            return state;
        default:
            throw new Error('未知的下單動作類型');
    }
}

export default portfolioReducer;

// 函數元件（Functional Components）：這是使用 JavaScript 函數來創建的元件，
// 它們可以接受 props 並返回描述 UI 應該呈現什麼的 React 元素。
// React 函數元件（Functional Components）範例

// 基本的問候元件
function Greeting() {
    return <p>Hello 世界~</p>
}

// 基本的時間元件
function CurrentTime() {
    return <p>現在時間：{new Date().toLocaleTimeString()}</p>
}

// 基本的使用者資訊元件(帶入參數)
function UserProfile({userName, userAge}) {
    return <h1>歡迎回來，{userName} {userAge} !</h1>
}

// 可以接受一個 props 物件的函數式元件
function Welcome(props) {
    return <h1>Hello, {props.name} {props.age}</h1>
}

// 可以接收一了列表資料
function TodoList({items}) {
    return (
        <ul>
            {
                items.map((item, index) => (<li key={index}>{item}</li>))
            }
        </ul>
    );
}

function FuncApp() {
    return (
        <>
            <Greeting />
            <CurrentTime />
            <UserProfile userName="Mark" userAge="25" />
            <Welcome name="Sara" age="20" />
            <TodoList items={['買牛奶', '寫程式', '學 React']} />
        </>
    );
}

export default FuncApp;
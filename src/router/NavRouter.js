import React, {useEffect} from "react";
import {useLocation} from 'react-router-dom' // 給 ScrollToTop 使用
import { Link, Route, Routes } from "react-router-dom";
// JSX
import JSXShoppingDemo from '../jsx/JSXShoppingDemo'
import JSXFinanceDemo from '../jsx/JSXFinanceDemo'
import PersonalExpenseTracker from '../jsx/PersonalExpenseTracker'
import JSXMenuListDemo from "../jsx/JSXMenuListDemo";
import JSXMenuListSpicyDemo from "../jsx/JSXMenuListSpicyDemo";
import JSXDangerousDemo from "../jsx/JSXDangerousDemo";
import JSXShoppingCartPropsDemo from "../jsx/JSXShoppingCartPropsDemo"
// Component
import FuncApp from "../component/FuncApp";
import ClassApp from "../component/ClassApp";
import HOCApp from "../component/HOCApp";
import HOCAssetInfo from "../component/HOCAssetInfo";
// Form & List
import Form1 from "../form_list/form/Form1";
import Form2 from "../form_list/form/Form2";
import List from "../form_list/list/List"
import FormAndList from "../form_list/FormAndList";
// Update
import Counter from "../update/Counter";
// Hooks
import UseStateApp from "../hooks/UseStateApp";
import UseEffectApp from "../hooks/UseEffectApp";
import UseEffect2App from "../hooks/UseEffect2App";
import GetJsonData from "../hooks/GetJsonData";
import UseReducerShoppingCarApp from "../hooks/use_reducer/UseReducerShoppingCarApp";
import UseMemoBmiApp from "../hooks/use_memo/UseMemoBmiApp";
import UseCallbackFilterPriceApp from "../hooks/use_callback/UseCallbackFilterPriceApp";
import UseRefCounterWithTimerApp from "../hooks/use_ref/UseRefCounterWithTimerApp";
import UserContextApp from "../hooks/use_context/UserContextApp"
import PortalAlertApp from "../portal/PortalAlertApp";
import ZustandShoppingCartApp from "../zustand/ShoppingCart";

// Lab1
import FinApp from "../lab1/FinApp";

// Lab2
import PriceApp from "../lab2/PriceApp";

// 置頂元件
function ScrollToTop() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // javascript 的語法
    }, [location]); // 依賴於 location 有變化的時候就執行 (依賴陣列)
}

function Home() {
    return <h2>Home Page</h2>
}

function Profile() {
    return <h2>Profile Page</h2>
}

function Settings() {
    return <h2>Settings Page</h2>
}

function NavRouter() {
    return (
        <div style={{display: 'flex'}}>
            {/* 配置置頂元件 */}
            <ScrollToTop />
            {/* 左邊選單 */}
            <nav style={{borderRight: '1px solid', padding: '1rem'}}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
                <ol>
                    JSX
                    <li><Link to="/JSXShoppingDemo">JSX Shopping Demo</Link></li>
                    <li><Link to="/JSXFinanceDemo">JSX Finance Demo</Link></li>
                    <li><Link to="/PersonalExpenseTracker">Personal Expense Tracker</Link></li>
                    <li><Link to="/JSXMenuListDemo">JSX MenuList Demo</Link></li>
                    <li><Link to="/JSXMenuListSpicyDemo">JSX MenuList Spicy Demo</Link></li>
                    <li><Link to="/JSXDangerousDemo">JSX Dangerous Demo</Link></li>
                    <li><Link to="/JSXShoppingCartPropsDemo">JSX Shopping Cart Props Demo</Link></li>
                </ol>
                <ol>
                    Component
                    <li><Link to="/FuncApp">FuncApp（函數元件）</Link></li>
                    <li><Link to="/ClassApp">ClassApp（類別元件）</Link></li>
                    <li><Link to="/HOCApp">HOCApp（高階元件）</Link></li>
                    <li><Link to="/HOCAssetInfo">HOCAssetInfo（高階元件）</Link></li>
                </ol>
                <ol>
                    Form
                    <li><Link to="/Form1">Form1</Link></li>
                    <li><Link to="/Form2">Form2</Link></li>
                    List
                    <li><Link to="/List">List</Link></li>
                    <li><Link to="/FormAndList">Form and List</Link></li>
                </ol>
                <ol>
                    Update(函數/物件式更新)
                    <li><Link to="/Counter">Counter</Link></li>
                </ol>
                <ol>
                    Hooks
                    <li><Link to="/UseStateApp">UseState App</Link></li>
                    <li><Link to="/UseEffectApp">UseEffect App</Link></li>
                    <li><Link to="/UseEffect2App">UseEffect2 App</Link></li>
                    <li><Link to="/GetJsonData">GetJsonData App</Link></li>
                    <li><Link to="/UseReducerShoppingCarApp">UseReducer ShoppingCar App</Link></li>
                    <li><Link to="/UseMemoBmiApp">UseMemo Bmi App</Link></li>
                    <li><Link to="/UseCallbackFilterPriceApp">UseCallback FilterPrice App</Link></li>
                    <li><Link to="/UseRefCounterWithTimerApp">UseRef CounterWithTimer App</Link></li>
                    <li><Link to="/UserContextApp">User Context App</Link></li>
                    <li><Link to="/ZustandShoppingCartApp">Zustand ShoppingCart App</Link></li>
                </ol>
                <ol>
                    Lab
                    <li><Link to="/FinApp">Fin App</Link></li>
                    <li><Link to="/PriceApp">Price App</Link></li>
                </ol>
                <ol>
                    Portal
                    <li><Link to="/PortalAlertApp">Portal Alert App</Link></li>
                </ol>
            </nav>
            {/* 右邊內容 */}
            <main style={{flex: 1, padding: '1rem'}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    {/* JSX */}
                    <Route path="/JSXShoppingDemo" element={<JSXShoppingDemo />} />
                    <Route path="/JSXFinanceDemo" element={<JSXFinanceDemo />} />
                    <Route path="/PersonalExpenseTracker" element={<PersonalExpenseTracker />} />
                    <Route path="/JSXMenuListDemo" element={<JSXMenuListDemo />} />
                    <Route path="/JSXMenuListSpicyDemo" element={<JSXMenuListSpicyDemo />} />
                    <Route path="/JSXDangerousDemo" element={<JSXDangerousDemo />} />
                    <Route path="/JSXShoppingCartPropsDemo" element={<JSXShoppingCartPropsDemo />} />
                    {/* Component */}
                    <Route path="/FuncApp" element={<FuncApp />} />
                    <Route path="/ClassApp" element={<ClassApp />} />
                    <Route path="/HOCApp" element={<HOCApp />} />
                    <Route path="/HOCAssetInfo" element={<HOCAssetInfo />} />
                    {/* Form & List */}
                    <Route path="/Form1" element={<Form1 />} />
                    <Route path="/Form2" element={<Form2 />} />
                    <Route path="/List" element={<List />} />
                    <Route path="/FormAndList" element={<FormAndList />} />
                    {/* Update */}
                    <Route path="/Counter" element={<Counter />} />
                    {/* Hooks */}
                    <Route path="/UseStateApp" element={<UseStateApp />} />
                    <Route path="/UseEffectApp" element={<UseEffectApp />} />
                    <Route path="/UseEffect2App" element={<UseEffect2App />} />
                    <Route path="/GetJsonData" element={<GetJsonData />} />
                    <Route path="/UseReducerShoppingCarApp" element={<UseReducerShoppingCarApp />} />
                    <Route path="/UseMemoBmiApp" element={<UseMemoBmiApp />} />
                    <Route path="/UseCallbackFilterPriceApp" element={<UseCallbackFilterPriceApp />} />
                    <Route path="/UseRefCounterWithTimerApp" element={<UseRefCounterWithTimerApp />} />
                    <Route path="/UserContextApp" element={<UserContextApp />} />
                    <Route path="/ZustandShoppingCartApp" element={<ZustandShoppingCartApp />} />
                    {/* Lab */}
                    <Route path="/FinApp" element={<FinApp />} />
                    <Route path="/PriceApp" element={<PriceApp />} />
                    {/* Portal */}
                    <Route path="/PortalAlertApp" element={<PortalAlertApp />} />
                </Routes>
            </main>
        </div>
    );
}

export default NavRouter;
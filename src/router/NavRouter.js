import React from "react";
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
                </Routes>
            </main>
        </div>
    );
}

export default NavRouter;
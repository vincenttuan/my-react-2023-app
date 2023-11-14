import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// JSX
import JSXShoppingDemo from '../jsx/JSXShoppingDemo'
import JSXFinanceDemo from '../jsx/JSXFinanceDemo'
import PersonalExpenseTracker from '../jsx/PersonalExpenseTracker'
import JSXMenuListDemo from "../jsx/JSXMenuListDemo";
import JSXMenuListSpicyDemo from "../jsx/JSXMenuListSpicyDemo";
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
                </Routes>
            </main>
        </div>
    );
}

export default NavRouter;
import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";

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
        <Router>
            <div style={{display: 'flex'}}>
                {/* 左邊選單 */}
                <nav style={{borderRight: '1px solid', padding: '1rem'}}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                </nav>
                {/* 右邊內容 */}
                <main style={{flex: 1, padding: '1rem'}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default NavRouter;
// npm install react-router-dom
// 會被安裝到 node_modules 資料夾中

import { Routes, Route }  from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>
}

function About() {
    return <h2>About Page</h2>
}

// 這二個 Route 分別代表二個路徑，對應到 Home 與 About 元件
// http://localhost:3000/ 會顯示 Home Page
// http://localhost:3000/about 會顯示 About Page
function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default AppRouter;
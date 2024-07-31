import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </HashRouter>
    );
};
export default App;

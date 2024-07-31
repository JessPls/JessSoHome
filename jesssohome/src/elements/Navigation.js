import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MOCs from "../pages/MOCs";

function Navigation() {
    return (<HashRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/MOCs">MOCs</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/MOCs" element={<MOCs/>}/>
            </Routes>
        </HashRouter>
    );
}
  
  export default Navigation;
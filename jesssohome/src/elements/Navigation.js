import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MOCs from "../pages/MOCs";
import "./Navigation.css";

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
                <li class="dropdown">
                    <Route path="/MOCs" element={<MOCs/>} class="dropbtn"/>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
            </Routes>
        </HashRouter>
    );
}
  
  export default Navigation;
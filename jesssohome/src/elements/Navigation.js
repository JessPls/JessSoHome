import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navigation.css";

import Home from "../pages/Home";
import About from "../pages/About";
import MOCs from "../pages/MOCs";

import StarWars from "../pages/StarWars";
import Ninjago from "../pages/Ninjago";
import Miscellaneous from "../pages/Miscellaneous";

function Navigation() {
    return (<HashRouter>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">JessSoHome</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown id="nav-dropdown-dark-example" title="MOCs">
                            <NavDropdown.Item href="#MOCs/StarWars">Star Wars</NavDropdown.Item>
                            <NavDropdown.Item href="#MOCs/Ninjago">Ninjago</NavDropdown.Item>
                            <NavDropdown.Item href="#MOCs/Miscellaneous">Miscellaneous</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="LegoBackground">
            <div className="segment">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/MOCs" element={<MOCs />} class="dropbtn" />
                    <Route path="/MOCs/StarWars" element={<StarWars />} />
                    <Route path="/MOCs/Ninjago" element={<Ninjago />} />
                    <Route path="/MOCs/Miscellaneous" element={<Miscellaneous />} />
                </Routes>
            </div>
        </div>
        
    </HashRouter>

    );
}

export default Navigation;
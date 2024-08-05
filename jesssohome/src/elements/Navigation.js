import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Home from "../pages/Home";
import About from "../pages/About";
import MOCs from "../pages/MOCs";

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
                            <NavDropdown.Item href="https://www.google.com/">Action</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.google.com/">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/MOCs" element={<MOCs />} class="dropbtn" />
        </Routes>
    </HashRouter>

    );
}

export default Navigation;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from "react-router-dom";

export default function BookShopNav() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Books Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={"/home"}>Home</NavLink>
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/search"}>Search</NavLink>
                        <NavLink to={"/random"}>Random</NavLink>
                        <NavLink to={"/quiz"}>Quiz</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
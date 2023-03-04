import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/logo.png';

function NavbarTacha() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
        <Navbar.Brand href="#">
        <div className="d-flex align-items-center">
            <img
            src={logo}
            height="70"
            className="d-inline-block align-top"
            alt="Logo de Tacha's Burger"
            />
            <span className="ms-2  text-center fs-1">
            Tacha's Burger
            </span>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#sobre-nosotros">Sobre nosotros</Nav.Link>
            <Nav.Link href="#menu-tachas">Nuestro menú</Nav.Link>
            <Nav.Link href="#reservaciones">Reservaciones</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavbarTacha;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="md" bg="light" variant="light" fixed="top" className="justify-content-center">
      <Container>
        <Navbar.Brand href="/">Navbar 3</Navbar.Brand>
        <Navbar.Toggle aria-controls="collapsingNavbar3" />
        <Navbar.Collapse id="collapsingNavbar3">
          <Nav className="me-auto w-100 justify-content-center">
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="//codeply.com">Codeply</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
          </Nav>
          <Nav className="ms-auto w-100 justify-content-end">
            <Nav.Link href="#">Right</Nav.Link>
            <Nav.Link href="#">Right</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Item</NavDropdown.Item>
              <NavDropdown.Item href="#">Item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Item</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

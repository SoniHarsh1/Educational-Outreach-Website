import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CenteredNavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="justify-content-center">
      <Container>
        <Navbar.Toggle aria-controls="navbarCentered" />
        <Navbar.Collapse id="navbarCentered">
          <Nav className="m-auto">
            <NavDropdown title="About" id="aboutDropdown">
              <NavDropdown.Item href="#">Education Outreach</NavDropdown.Item>
              <NavDropdown.Item href="#">Our People</NavDropdown.Item>
              <NavDropdown.Item href="#">IIT Indore</NavDropdown.Item>
              <NavDropdown.Item href="#">Campus Life</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Programs</Nav.Link>
            <Nav.Link href="#">Cooperation & Engagements</Nav.Link>
            <Nav.Link href="#">Academics & Research</Nav.Link>
            <Nav.Link href="#">News & Events</Nav.Link>
            <Nav.Link href="#">Reach Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CenteredNavBar;

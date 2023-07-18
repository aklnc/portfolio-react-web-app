import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
  return (
    <Navbar id="navigation" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">App Center</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            </Nav>
          <Nav>
            <Link className="navbar-brand" to="/converter">Profile Converter</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

/*


            <Link className="nav-link" to="/database">Database</Link>
 */
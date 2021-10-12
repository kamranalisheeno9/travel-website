import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Form,FormControl,Button } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
const NavbarComp=(props)=> {

    return (
        <div>
             <Container fluid className="nav">
        <Container fluid className="nav-bar"  >
          <Navbar expand="lg" collapseOnSelect={true} variant="dark" >
            <Navbar.Brand href="#mainpage" className="logo">ABC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"  >
              <NavDropdown title="Navigation Menus" className="menu-dropdown"  id="navbarScrollingDropdown">
        <NavDropdown.Item href="#HomeMenu">Home Menu</NavDropdown.Item>
        <NavDropdown.Item href="#About">About Menu</NavDropdown.Item>
        <NavDropdown.Item href="#Tour">Tour Menu</NavDropdown.Item>
        <NavDropdown.Item href="#SignIN">SignIn Menu</NavDropdown.Item>
        <NavDropdown.Item href="#Policies">Company Policies Menu</NavDropdown.Item>
        <NavDropdown.Item href="#Contact">Contact Menu</NavDropdown.Item>
        <NavDropdown.Item href="#Organization">Organization Control Menu</NavDropdown.Item>
      </NavDropdown>
              <Nav.Link href="#contact-number" className="menu-dropdown contact-nbr">+65 XXXX XXXX</Nav.Link>
              </Nav>
<Nav >
<Form className="d-flex search-nav">
      <FormControl 
        type="search"
        placeholder="Search"
        className="mr-2 search-box"
        aria-label="Search"
      />
      <Button variant="outline-secondary" className="search-btn"><ImSearch /></Button>
    </Form>
     </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        </Container>
        </div>
    );
}

export default NavbarComp;
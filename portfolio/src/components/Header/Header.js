import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import './Header.css';



function Header() {
  
    return (
      <Navbar className="header" fixed="top" variant="light">
        <Container className="header-container">
          <div className="header-name">Alena Rehberger</div>
          <span></span>
          <span></span>
          <span></span>
          <Navbar.Brand className='header-font-col' href="#home">About Me</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='header-font-col' href="#home">Home</Nav.Link>
            <Nav.Link className='header-font-col' href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='header-font-col' href="#contacts">Contacts</Nav.Link>
            <Nav.Link className='header-font-col' href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }


export default Header;
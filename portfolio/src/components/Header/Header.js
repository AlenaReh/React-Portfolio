import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Header.css";
import {
  BsLaptop,
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsFileEarmarkPersonFill,
} from "react-icons/bs";

function Header({ currentPage, handlePageChange }) {
  return (
    <Navbar className="header" fixed="top" variant="light">
      <Container className="header-container">
        <div className="header-name">Alena Rehberger</div>
        <span></span>
        <span></span>
        <span></span>
        <Nav.Link
          className="header-font-col"
          href="#Intro"
          onClick={() => handlePageChange("Intro")}
        >
          About Me <BsFillPersonFill />
        </Nav.Link>
        <Nav className="me-auto">
          <Nav.Link
            className="header-font-col"
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio <BsLaptop />
          </Nav.Link>
          <Nav.Link
            className="header-font-col"
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
          >
            Contact <BsFillTelephoneFill />
          </Nav.Link>
          <Nav.Link
            className="header-font-col"
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
          >
            Resume <BsFileEarmarkPersonFill />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

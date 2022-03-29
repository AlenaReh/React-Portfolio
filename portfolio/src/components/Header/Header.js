import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import styled from "styled-components";
import "./Header.css";
import Toggle from '../Toggle';

import {
  BsLaptop,
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsFileEarmarkPersonFill,
  BsFillBrightnessHighFill,
  BsFillMoonFill
} from "react-icons/bs";

// const Toggle = styled.button`
//     cursor: pointer;
//     height: 50px;
//     width: 50px;   
//     border-radius: 50%;
//     border: none;
//     background-color: ${props => props.theme.titleColor};
//     color: ${props => props.theme.pageBackground};
//     &:focus {
//         outline: none;
//     }
//     transition: all .5s ease;
// `;
// const NavbarStyle = styled.div`
//   display: flex;
//   height: 100px;
//   color: #f0d6d2;
//   font-size: 20px;
//   background-color: ${props => props.theme.pageBackground};
//   transition: all .5s ease;
// `;

function Header({ currentPage, handlePageChange, theme, setTheme }) {

  // function changeTheme() {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };

  // const icon = theme === 'light' ? <BsFillMoonFill size={40}/> : <BsFillBrightnessHighFill size={40}/>;
  
  return (
    <Navbar className="header" fixed="top" variant="light">
      <Toggle />
      <Container className="header-container">

        {/* <Toggle onClick={changeTheme}>
          {icon}
        </Toggle> */}
        <div className="header-name">Alena Rehberger</div>
        <span></span>
        <span></span>
        <span></span>

        <Nav className="me-auto">
        <Nav.Link
          className="header-font-col"
          href="#Intro"
          onClick={() => handlePageChange("Intro")}
        >
          About Me <BsFillPersonFill />
        </Nav.Link>
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

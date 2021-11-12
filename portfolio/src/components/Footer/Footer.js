import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <div>Alena Rehberger</div>
        </Col>
        <Col md="4" className="footer-copywright">
          <div>Copyright © {year}</div>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AlenaReh"
                style={{ color: "#f0d6d2" }}
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/alena-rehberger/"
                style={{ color: "#f0d6d2" }}
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="alenarehberger92@gmail.com"
                style={{ color: "#f0d6d2" }}
                target="_blank"
              >
                <SiGmail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

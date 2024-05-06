import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";

export const Footer = () => {
  return (
    <footer className="footer pt-5">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p id="footer-logo">Krishnam <span>Bisht</span></p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/krishnam-bisht-269a201a6/" target="__blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/kb0303" target="__blank"><img src={navIcon2} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

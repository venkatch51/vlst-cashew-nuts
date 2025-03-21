import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoImg from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark p-5">
      <Container className="text-light">
        <Row>
          <Col>
            <h4>VLST Inc</h4>
            <img src={logoImg} style={{width: 50}}/>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

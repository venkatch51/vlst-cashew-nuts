import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoImg from "../images/logo.png";
import { useTradersContext } from "../context/TradersContext";

const Footer = () => {
  const { details } = useTradersContext();
  return (
    <footer className="bg-color-footer p-5">
      <Container className="text-light">
        <Row>
          <Col>
            <h4>VLST Inc</h4>
            <img src={logoImg} style={{ width: 50 }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="quality-nuts">
              We make sure your get farm fresh quality produce within the
              shortest time and considering cost reduction through efficiency
              and use of modern technology. You are our top priority.
            </p>
          </Col>
          <Col>
            <div className="links">
              <h4 className="quick-link">Quick Links</h4>
              <p>Home</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
          </Col>
          <Col>
            <div className="contact-info">
              <h4>Contact Info</h4>
              {details.map((owner) => {
                return (
                  <div className="customer-data container p-3">
                    <h5 className="prop-name">Prop Name: {owner.propName}</h5>
                    <h5 className="company-name">
                      company Name: {owner.companyName}
                    </h5>
                    <h5 className="gstin">GSTIN: {owner.GSTIN}</h5>
                    <a className="text-light" href={owner.website}>Link: {owner.website}</a>
                    <p className="gmail">gmail: {owner.gmail}</p>
                    <p className="addres">address: {owner.address}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

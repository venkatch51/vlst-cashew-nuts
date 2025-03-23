import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoImg from "../images/logo.png";
import { useTradersContext } from "../context/TradersContext";

const Footer = () => {
  const { details, loading, error } = useTradersContext();

  if (loading) return <p>Loading...</p>; // Loading state
  if (error) return <p>Error: {error}</p>; // Error state

  return (
    <footer className="bg-color-footer p-5">
      <Container className="text-light">
        <Row>
          <Col>
            <h4>VLST Inc</h4>
            <img src={logoImg} style={{ width: 50 }} alt="VLST Logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="quality-nuts">
              We make sure you get farm fresh quality produce within the
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
              {details.length > 0 ? (
                details.map((owner, index) => (
                  <div key={index} className="customer-data container p-3">
                    <h5 className="prop-name">Prop Name: {owner.propName}</h5>
                    <h5 className="company-name">
                      Company Name: {owner.companyName}
                    </h5>
                    <h5 className="gstin">GSTIN: {owner.GSTIN}</h5>
                    <a className="text-light" href={owner.website}>
                      Link: {owner.website}
                    </a>
                    <p className="gmail">Gmail: {owner.gmail}</p>
                    <p className="address">Address: {owner.address}</p>
                  </div>
                ))
              ) : (
                <p>No contact details available.</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

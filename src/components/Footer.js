import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoImg from "../images/logo.png";
import { useTradersContext } from "../context/TradersContext";
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Add social media icons

const Footer = () => {
  const { details, loading, error } = useTradersContext();

  if (loading) return <p>Loading...</p>; // Loading state
  if (error) return <p>Error: {error}</p>; // Error state

  return (
    <footer className="bg-color-footer p-5">
      <Container className="text-light">
        <Row>
          <Col md={4}>
            <h4 className="footer-logo-title">VLST Inc</h4>
            <img src={logoImg} style={{ width: 50 }} alt="VLST Logo" />
            <p className="footer-description mt-3">
              We specialize in providing premium cashew nuts directly from the farm to your door.
            </p>
          </Col>
          <Col md={4}>
            <div className="quick-links">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/contact" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="contact-info">
              <h4 className="footer-heading">Contact Info</h4>
              {details.length > 0 ? (
                details.map((owner, index) => (
                  <div key={index} className="customer-data">
                    <h5 className="prop-name">Prop Name: {owner.propName}</h5>
                    <h5 className="company-name">Company Name: {owner.companyName}</h5>
                    <h5 className="gstin">GSTIN: {owner.GSTIN}</h5>
                    <a className="text-light" href={owner.website}>
                      Website: {owner.website}
                    </a>
                    <p className="gmail">Email: {owner.gmail}</p>
                    <p className="address">Address: {owner.address}</p>
                  </div>
                ))
              ) : (
                <p>No contact details available.</p>
              )}
            </div>
          </Col>
        </Row>

        <Row className="mt-4 text-center">
          <Col>
            <div className="social-media-icons">
              <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
              <a href="https://facebook.com" className="social-icon"><FaFacebookF /></a>
              <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
            </div>
            <p className="mt-3">&copy; 1990 VLST Inc. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

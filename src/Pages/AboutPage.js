import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import cashewImage from "../images/cashew-card-img.jpg";
import profileImg from "../images/profile-img.png";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Section 1: Hero Section */}
      <div className="hero-section bg-success text-white text-center py-5">
        <Container>
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Bringing Premium Cashew Nuts Directly from Farmers to You
          </p>
        </Container>
      </div>

      {/* Section 2: Company Story */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2>Our Story</h2>
            <p>
              We are a family-owned business that believes in providing the
              freshest, highest-quality cashew nuts directly from trusted
              farmers. Our journey began in 1990, when we saw a need for better
              sourcing methods for cashews. We decided to bridge the gap between
              farmers and consumers, ensuring fair trade and quality control
              every step of the way.
            </p>
            <p>
              Today, we have expanded to deliver our cashew nuts across various
              regions, with a focus on sustainability and supporting the farmers
              who grow our products.
            </p>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={cashewImage} alt="Cashew Farming" />
              <Card.Body>
                <Card.Title>Our Sourcing Process</Card.Title>
                <Card.Text>
                  We work directly with farmers who prioritize quality and
                  sustainability. Our cashews are handpicked and processed with
                  the utmost care to maintain their freshness and flavor.
                </Card.Text>
                <Button variant="success" href="/contact">
                  Contact Us to Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Section 3: Our Values */}
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <div className="value-box text-center p-4">
              <i
                className="fas fa-leaf fa-3x mb-3"
                style={{ color: "#28a745" }}
              ></i>
              <h4>Sustainability</h4>
              <p>
                We believe in sustainable farming practices that protect the
                environment while ensuring high-quality products.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="value-box text-center p-4">
              <i
                className="fas fa-handshake fa-3x mb-3"
                style={{ color: "#007bff" }}
              ></i>
              <h4>Fair Trade</h4>
              <p>
                We ensure that farmers are paid fairly for their hard work and
                receive the support they need to thrive.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="value-box text-center p-4">
              <i
                className="fas fa-heart fa-3x mb-3"
                style={{ color: "#dc3545" }}
              ></i>
              <h4>Quality</h4>
              <p>
                Our commitment to quality ensures that every cashew nut you
                receive is fresh, healthy, and delicious.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Section 4: Our Team */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <Row>
          <Col md={4} className="text-center">
            <img
              src={profileImg}
              alt="Team Member 1"
              className="rounded-circle mb-2"
            />
            <h5>Ganta Sai Prasad</h5>
            <p>Owner</p>
          </Col>
        </Row>
      </Container>

      {/* Section 5: Call to Action */}
      <div className="cta-section bg-light text-center py-5">
        <h3>Join Us in Supporting Sustainable Agriculture</h3>
        <p>
          Discover the best quality cashews and help support local farmers.
          Order today or get in touch for more information.
        </p>
        <Button variant="success" href="/contactus">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;

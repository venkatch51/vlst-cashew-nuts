import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cashewImage from "../images/cashew-img.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import cashewCardImg from "../images/cashew-card-img.jpg";

const HomePage = () => {
  
  return (
    <div className="home-page">
      <div className="carousel-section-container">
        <Carousel>
          <Carousel.Item>
            <img className="carousel-img" src={cashewImage} />
            <Carousel.Caption>
              <h3>Quality Cashew Nuts Sourced from Trusted Farmers</h3>
              <p>Our business is committed to supporting local communities while offering premium nuts to our consumers.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={cashewImage} />
            <Carousel.Caption>
              <h3>Our Commitment to Quality</h3>
              <p>Our cashew nuts are carefully selected, processed, and packaged to retain their rich flavor and nutritional value.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={cashewImage} />
            <Carousel.Caption>
              <h3>B2B & B2C Options</h3>
              <p>
              Whether you are a business or an individual, we offer flexible purchasing options.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="our-services-section pt-4 justify-content-center">
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cashewCardImg} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Click to Know more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cashewCardImg} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Click to Know more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cashewCardImg} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Click to Know more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-three p-2">
        
      </div>
    </div>
  );
};

export default HomePage;

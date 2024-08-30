import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../App.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <Container>
        <Row>
          <Col md="4" className="text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
            </div>
          </Col>
          <Col md="4" className="text-center">
            <h5>Subscribe to our Newsletter</h5>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <Button color="primary" className="mt-2">
                Subscribe
              </Button>
            </div>
          </Col>
          <Col md="4" className="text-center">
            <h5>Contact Us</h5>
            <p>123 Main Street, City, Country</p>
            <p>
              <FaEnvelope className="icon" /> contact@example.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
} from "reactstrap";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import "../App.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-black">
        <div>
          {" "}
          <Col lg="12" className="text-center">
            <h2 className="text-black">Subscribe To Our Newsletter</h2>
            <div className="newsletter ">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <Button color="light" className="mt-2">
                Subscribe
              </Button>
            </div>
          </Col>
        </div>
        <Row className="justify-content-center mt-5">
          <Col sm="3">
            <h5>Zorvath</h5>
            <p>Munday To Saturday ( 7:00 am to 9:00 pm )</p>
            <p>051 4567890</p>
            <p>051 1234567</p>
            <p>contact@zorvath.com</p>
          </Col>
          <Col sm="3">
            <h5>Company</h5>
            <p>About us</p>
            <p>Our Experts</p>
            <p>Services & Price</p>
            <p>Latest News</p>
            <p>Support Center</p>
          </Col>
          <Col sm="3">
            <h5>Customers</h5>
            <ListGroup>
              <p tag="a" href="#">
                Contact us
              </p>
              <p tag="a" href="#">
                Payment & Tax
              </p>
              <p tag="a" href="#">
                Bonus Point
              </p>
              <p tag="a" href="#">
                Supply Chain
              </p>
              <p tag="a" href="#">
                Student Discount
              </p>
            </ListGroup>
          </Col>
          <Col sm="3">
            <h5>Support</h5>
            <ListGroup flush>
              Shipping Info
              <p tag="a" href="#"></p>
              <p tag="a" href="#">
                Returns
              </p>
              <p tag="a" href="#">
                Refund
              </p>
              <p tag="a" href="#">
                How To Order
              </p>
              <p tag="a" href="#">
                How To Track
              </p>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="3" className="text-center">
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
        </Row>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Zorvath. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
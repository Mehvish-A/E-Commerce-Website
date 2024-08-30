import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { removeFromCart } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";
import "../App.css"; // Make sure to import your CSS file

const CartOffcanvas = ({ isOpen, toggle }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <Offcanvas direction="end" isOpen={isOpen} toggle={toggle}>
      <OffcanvasHeader toggle={toggle}>Your Cart</OffcanvasHeader>
      <OffcanvasBody>
        <ListGroup>
          {cartItems.length === 0 ? (
            <ListGroupItem>Your cart is empty</ListGroupItem>
          ) : (
            cartItems.map((item) => (
              <ListGroupItem key={item.id} className="cart-item">
                <Row>
                  <Col md="4">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </Col>
                  <Col md="4" className="cart-item-content">
                    {item.name}
                  </Col>
                  <Col md="4">
                    <Button
                      color="danger"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))
          )}
        </ListGroup>
        {cartItems.length > 0 && (
          <Link to="/checkout">
            <Button color="primary" className="mt-3" onClick={toggle}>
              Proceed to Checkout
            </Button>
          </Link>
        )}
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default CartOffcanvas;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Table, Button } from "reactstrap";
import { removeFromCart, clearCart } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";
import "../App.css"; // Import your CSS file for styling

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container className="cart-page" fluid>
      <div>
        <div className="imgesize">
          <img
            src="./imges/banner.png"
            className="img-fluid mb-3"
            alt="Banner"
          />
        </div>
        <Row>
          <Col>
            <h1 className="text-center">Your Cart</h1>

            <Table striped>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "100px", height: "100px" }}
                        />
                        {item.name}
                      </td>
                      <td>{item.size || "N/A"}</td>
                      <td>${(item.unitPrice || 0).toFixed(2)}</td>
                      <td>{item.quantity || 0}</td>
                      <td>
                        $
                        {((item.unitPrice || 0) * (item.quantity || 0)).toFixed(
                          2
                        )}
                      </td>
                      <td>
                        <Button
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          X
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
            <Row>
              <Col md="6" className="text-start">
                {cartItems.length > 0 && (
                  <Link to="/checkout">
                    <Button color="primary" className="mt-3">
                      Proceed to Checkout
                    </Button>
                  </Link>
                )}
              </Col>
              <Col md="6" className="text-end">
                <Button
                  color="danger"
                  className="mb-3"
                  onClick={handleClearCart}
                >
                  Clear All
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <Row className="topmargin">
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram3.png"
                alt="Girl 1"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram4.png"
                alt="Girl 2"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram5.png"
                alt="Girl 3"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram2.png"
                alt="Girl 4"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram6.png"
                alt="Girl 5"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram.png"
                alt="Girl 6"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
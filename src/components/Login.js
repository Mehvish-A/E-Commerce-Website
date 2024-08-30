import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import "../App.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password.length >= 8) {
      dispatch(login({ email }));
      navigate("/checkout"); // Redirect to checkout page after successful login
    } else {
      alert(
        "Please enter a valid email and password with at least 8 characters."
      );
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <div className="login-box">
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button type="submit">Login</Button>
            </Form>
            <p>You have not login account</p>
          </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import logo from "../image.png";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <ReactstrapNavbar color="light" light expand="lg">
        <img src={logo} alt="Logo" style={{ width: "100px", height: "auto" }} />
        <NavbarBrand tag={Link} to="/">
          {" "}
          Home{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </NavItem>
            {user ? (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/profile">
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button color="link" onClick={() => dispatch(logout())}>
                    Logout
                  </Button>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <NavLink tag={Link} to="/login">
                  <Button color="light">log in</Button>
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </ReactstrapNavbar>
    </div>
  );
};

export default Navbar;
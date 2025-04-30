import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import CartSummary from "../cart/CartSummary";

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const navStyle = {
    background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
    color: "white",
    padding: "1rem",
    borderBottom: "4px solid #FFD700",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#FFD700",
    fontWeight: "900",
    marginRight: "20px",
    fontSize: "18px",
    transition: "color 0.3s ease-in-out",
  };

  const linkStyleHover = {
    color: "yellow",
  };

  return (
    <Navbar style={navStyle} color="light" light expand="md">
      <>
        <Link to="/" style={linkStyle}>
          Winder Mağazası
        </Link>
      </>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <>
              <Link
                to="/saveproduct"
                style={{ ...linkStyle, ...(isOpen && linkStyleHover) }}>
                Ürün ekle
              </Link>
            </>
          </NavItem>

          <NavItem m={5}>
            <>
              <Link style={linkStyle} to="/login">
                Giriş Yap
              </Link>
            </>
          </NavItem>
          <NavItem>
            <>
              <Link style={linkStyle} to="/register">
                Kayıt Ol
              </Link>
            </>
          </NavItem>
          <CartSummary />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navi;

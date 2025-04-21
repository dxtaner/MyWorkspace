import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import CartSummary from "./CartSummary";

class Navi extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    const { removeFromCart, cart } = this.props;

    return (
      <div>
        <Navbar
          className="custom-navbar"
          expand="md"
          style={{
            background: "linear-gradient(to right, #ff3366, #33ccff)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}>
          <NavbarBrand
            href="/"
            style={{
              fontSize: "28px",
              fontWeight: "900",
              fontFamily: "cursive",
              color: "white",
              textDecoration: "none",
            }}>
            E-Winder App
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="ms-auto"
              style={{
                fontSize: "18px",
                fontWeight: "700",
                fontFamily: "cursive",
                color: "red",
                textDecoration: "none",
              }}
              navbar>
              <CartSummary removeFromCart={removeFromCart} cart={cart} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;

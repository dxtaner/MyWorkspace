import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

const cartSummaryStyle = {
  dropdown: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    borderRadius: "5px",
  },
  badgeDanger: {
    backgroundColor: "#dc3545",
    color: "#fff",
    marginLeft: "8px",
  },
  badgeSuccess: {
    backgroundColor: "#28a745",
    color: "#fff",
    marginLeft: "8px",
  },
  emptyCartLink: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu right style={cartSummaryStyle.dropdown}>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(cartItem.product)}
                style={cartSummaryStyle.badgeDanger}>
                X
              </Badge>
              {cartItem.product.productName}
              <Badge color="success" style={cartSummaryStyle.badgeSuccess}>
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart" style={cartSummaryStyle.emptyCartLink}>
              Sepete Git
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Boş Sepet</NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}

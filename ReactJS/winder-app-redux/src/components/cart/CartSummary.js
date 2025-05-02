import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import alertify from "alertifyjs";

const CartSummary = ({ cart, actions }) => {
  const removeFromCart = (product) => {
    actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi");
  };

  const renderEmpty = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Sepetiniz boş</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  const renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </DropdownToggle>
        <DropdownMenu right>
          {cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() => removeFromCart(cartItem.product)}>
                <FontAwesomeIcon icon={faTrash} />
              </Badge>
              {cartItem.product.productName}{" "}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart">Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  return <div>{cart.length > 0 ? renderSummary() : renderEmpty()}</div>;
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);

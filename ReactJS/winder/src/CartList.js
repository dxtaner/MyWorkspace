import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
} from "reactstrap";

const customStyle = {
  cartList: {
    margin: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    flex: "1",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderTop: "3px solid purple",
  },
  cardTitle: {
    background: "linear-gradient(to right, #ff3366, #33ccff)",
    color: "#fff",
    padding: "12px",
    marginTop: "12px",
    fontWeight: "900",
    fontSize: "18px",
  },
  cardText: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "800",
    color: "purple",
    textAlign: "left",
    marginBottom: "6px",
    borderBottom: "3px solid gold",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText2: {
    padding: "12px",
    fontSize: "18px",
    fontWeight: "800",
    color: "#222266",
    float: "right",
    marginBottom: "6px",
    borderBottom: "3px solid gold",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    background: "linear-gradient(to right, #ff3366, #33ccff)",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: "8px 16px",
    borderRadius: "3px",
    margin: "10px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  increaseButton: {
    margin: "10px",
    background: "linear-gradient(to right, #ff3366, #33ccff)",
    color: "green",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "700",
  },
  increaseButtonHover: {
    backgroundColor: "#218838",
  },
  decreaseButton: {
    background: "linear-gradient(to right, #FFD700, #FFA500)",
    color: "red",
    margin: "10px",
    border: "none",
    padding: "10px 20px",
    fontWeight: "700",
    cursor: "pointer",
  },
  decreaseButtonHover: {
    background: "linear-gradient(to right, #FFA500, #FF6347)",
  },
  removeButton: {
    background: "linear-gradient(to right, #DC143C, #8B0000)",
    color: "black",
    margin: "10px",
    border: "none",
    padding: "10px 20px",
    fontWeight: "700",
    cursor: "pointer",
  },
  removeButtonHover: {
    background: "linear-gradient(to right, #C82333, #8B0000)",
  },
  totalPrice: {
    position: "fixed",
    bottom: "0",
    left: "100",
    width: "55%",
    textAlign: "right",
    fontSize: "18px",
    fontWeight: "1000",
    borderBottom: "3px solid gold",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    background: "linear-gradient(to right, #ff3366, #33ccff)",
    padding: "10px",
    color: "gold",
  },

  cardImage: {
    height: "200px",
    width: "200px",
    objectFit: "cover",
    display: "block",
    margin: "0 auto",
  },
};

export default class CartList extends Component {
  calculateTotalPrice() {
    const { cart } = this.props;
    let totalPrice = 0;

    cart.forEach((cartItem) => {
      totalPrice += cartItem.product.unitPrice * cartItem.quantity;
    });

    return totalPrice.toFixed(2);
  }

  increaseQuantity = (product) => {
    const { cart } = this.props;
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.product.id === product.id) {
        cartItem.quantity += 1;
      }
      return cartItem;
    });
    this.props.updateCart(updatedCart);
  };

  decreaseQuantity = (product) => {
    const { cart } = this.props;
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.product.id === product.id) {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        }
      }
      return cartItem;
    });
    this.props.updateCart(updatedCart);
  };

  renderCart() {
    return (
      <div style={customStyle.cartList}>
        <h2>Sepetiniz</h2>
        {this.props.cart.map((cartItem) => (
          <Card key={cartItem.product.id} style={customStyle.card}>
            <CardTitle style={customStyle.cardTitle}>
              {cartItem.product.productName}
            </CardTitle>
            <CardImg
              src={cartItem.product.image}
              alt={cartItem.product.productName}
              style={customStyle.cardImage}
            />
            <CardBody>
              <CardText style={customStyle.cardText}>
                Ürün Fiyatı: {cartItem.product.unitPrice}
              </CardText>
              <CardText style={customStyle.cardText}>
                Ürün Sayısı: {cartItem.quantity}
              </CardText>

              <CardText style={customStyle.cardText2}>
                Ürünün Toplam Tutarı:{" "}
                {cartItem.quantity * cartItem.product.unitPrice} TL
              </CardText>
            </CardBody>
            <Button
              color="success"
              onClick={() => this.increaseQuantity(cartItem.product)}
              style={customStyle.increaseButton}>
              Artır
            </Button>
            <Button
              color="warning"
              onClick={() => this.decreaseQuantity(cartItem.product)}
              style={customStyle.decreaseButton}>
              Azalt
            </Button>
            <Button
              color="danger"
              onClick={() => this.props.removeFromCart(cartItem.product)}
              style={customStyle.removeButton}
              onMouseOver={(e) =>
                (e.target.style.background =
                  customStyle.removeButtonHover.background)
              }
              onMouseOut={(e) =>
                (e.target.style.background =
                  customStyle.removeButton.background)
              }>
              Ürünü Sepetten Çıkar
            </Button>
          </Card>
        ))}
        <div style={customStyle.totalPrice}>
          Toplam Tutar: {this.calculateTotalPrice()} TL
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}

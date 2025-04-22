import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
  Row,
  Col,
} from "reactstrap";

const customStyle = {
  card: {
    flex: "1",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    background: "linear-gradient(to right, #ff3366, #33ccff)",
    color: "#fff",
    padding: "12px",
    marginTop: "12px",
    fontWeight: "900",
    fontSize: "18px",
  },
  addButton: {
    background: "linear-gradient(to right, #ff3366, #33ccff)",
    color: "#222266",
    border: "1px solid purple",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "800",
    transition: "background-color 0.2s",
    marginTop: "12px",
  },
  addButtonHover: {
    backgroundColor: "#0056b3",
  },
  cardImage: {
    height: "200px",
    width: "200px",
    objectFit: "cover",
    display: "block",
    margin: "0 auto",
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
};

export default class ProductList extends Component {
  render() {
    const { title, currentCategory, products, addToCart } = this.props;

    return (
      <div className="product-list">
        <h2 style={customStyle.cardTitle}>
          {title} - {currentCategory}
        </h2>
        <Row>
          {products.map((product, index) => (
            <Col key={product.id} xs="12" md="6" lg="4">
              <Card style={customStyle.card}>
                <CardImg
                  style={customStyle.cardImage}
                  src={product.image}
                  alt={product.productName}
                />
                <CardTitle style={customStyle.cardTitle}>
                  {product.productName}
                </CardTitle>
                <CardBody>
                  <CardText style={customStyle.cardText}>
                    Ürün Fiyatı: {product.unitPrice}
                  </CardText>
                  <CardText style={customStyle.cardText}>
                    Ürün Stok Adeti: {product.unitsInStock}
                  </CardText>
                  <Button
                    onClick={() => addToCart(product)}
                    style={customStyle.addButton}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor =
                        customStyle.addButtonHover.backgroundColor)
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor =
                        customStyle.addButton.backgroundColor)
                    }>
                    Ürünü Sepete Ekle
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

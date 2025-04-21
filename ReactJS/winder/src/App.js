import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import CartList from "./CartList";
import NotFound from "./NotFound";
import About from "./About.js";
import alertify from "alertify.js";

const customStyle = {
  appContainer: {
    background: "#f4f4f4",
    padding: "20px",
  },
};

class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    const { cart } = this.state;
    const addedItemIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (addedItemIndex !== -1) {
      cart[addedItemIndex].quantity += 1;
    } else {
      cart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart });
    alertify.success(product.productName + " ürün sepete eklendi");
  };

  removeFromCart = (product) => {
    const { cart } = this.state;
    const updatedCart = cart.filter((item) => item.product.id !== product.id);
    this.setState({ cart: updatedCart });
    alertify.error(product.productName + " ürün sepetten çıkarıldı!");
  };

  updateCart = (updatedCart) => {
    this.setState({ cart: updatedCart });
  };

  render() {
    const { currentCategory, products, cart } = this.state;
    const productInfo = { title: "Product List" };
    const categoryInfo = { title: "Category List" };

    return (
      <div style={customStyle.appContainer}>
        <Container>
          <Navbar removeFromCart={this.removeFromCart} cart={cart} />
          <Row>
            <Col xs="12" sm="12" md="4" xl="3" xxl="3">
              <CategoryList
                currentCategory={currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="12" sm="12" md="8" xl="9" xxl="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={products}
                      addToCart={this.addToCart}
                      currentCategory={currentCategory}
                      info={productInfo}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={cart}
                      removeFromCart={this.removeFromCart}
                      updateCart={this.updateCart}
                    />
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
          <About />
        </Container>
      </div>
    );
  }
}

export default App;

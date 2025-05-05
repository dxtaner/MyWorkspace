import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Box } from "@chakra-ui/react";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import ProductCard from "./ProductCard.js";

const badgeStyle = {
  margin: "10px",
  padding: "10px",
  borderRadius: "20%",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "purple",
  backgroundColor: "yellow",
};

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  render() {
    return (
      <Box
        p={4}
        bg={"gold"}
        borderWidth={"2px"}
        minW={"inherit"}
        borderColor={"yellow"}>
        <Badge
          fontWeight="800"
          fontSize={18}
          p={2}
          style={badgeStyle}
          borderWidth={"3px"}
          borderColor={"gold"}>
          Ürünler
        </Badge>
        <Badge
          fontWeight="800"
          fontSize={18}
          p={2}
          style={badgeStyle}
          borderWidth={"2px"}
          borderColor={"gold"}>
          {this.props.currentCategory.categoryName}
        </Badge>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={4}
          justifyContent="center"
          alignItems={"center"}>
          {this.props.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={this.props.actions.addToCart}
            />
          ))}
        </Box>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

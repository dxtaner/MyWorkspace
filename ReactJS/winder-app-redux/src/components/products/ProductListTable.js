import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

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

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " sepete eklendi");
  };

  render() {
    return (
      <div>
        <h3>
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
        </h3>
        <Table bg={"gold"} borderWidth={"2px"} borderColor={"yellow"}>
          <Thead>
            <Tr>
              <Th>Ürün İsmi</Th>
              <Th>Ürün Fiyatı</Th>
              <Th>Ürün Adeti</Th>
              <Th>Ürün Stok Adeti</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={16} fontWeight={900}>
            {this.props.products.map((product) => (
              <Tr key={product.id}>
                <Td>
                  <Link to={"/saveproduct/" + product.id}>
                    {product.productName}
                  </Link>
                </Td>
                <Td>{product.unitPrice}</Td>
                <Td>{product.quantityPerUnit}</Td>
                <Td>{product.unitsInStock}</Td>
                <Td>
                  <Button
                    mr={3}
                    size="md"
                    fontWeight={800}
                    bgGradient="linear(to-r, #FF9900, #FF66FF)"
                    _hover={{
                      bgGradient: "linear(to-r, #FF3300, #FF00FF)",
                    }}
                    border={"2px solid purple"}
                    onClick={() => this.addToCart(product)}>
                    Sepete Ekle
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
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

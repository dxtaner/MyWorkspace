import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  Box,
  Tfoot,
} from "@chakra-ui/react";

import alertify from "alertifyjs";

class CartDetail extends React.Component {
  incrementQuantity(product) {
    this.props.actions.incrementQuantity(product);
    alertify.success(product.productName + " sepete eklendi");
  }

  decrementQuantity(product) {
    this.props.actions.decrementQuantity(product);
    alertify.error(product.productName + " sepetten eksildi");
  }

  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi");
  }

  calculateTotalPrice() {
    const { cart } = this.props;
    return cart.reduce((total, cartItem) => {
      return total + cartItem.product.unitPrice * cartItem.quantity;
    }, 0);
  }

  render() {
    return (
      <Box p={5} bgGradient="linear(to-r, #FF0080, #7928CA)" color="white">
        <Table bg={"gold"} border={"2px solid yellow"}>
          <Thead>
            <Tr>
              <Th fontSize={12} fontWeight={800} color={"purple"}>
                Ürün Adı
              </Th>
              <Th fontSize={12} fontWeight={800} color={"purple"}>
                Ürün Fiyatı
              </Th>
              <Th fontSize={12} fontWeight={800} color={"purple"}>
                Ürün Adeti
              </Th>
              <Th fontSize={12} fontWeight={800} color={"purple"}>
                {" "}
                Toplam Fiyat
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody fontSize={16} fontWeight={900} color={"black"}>
            {this.props.cart.length > 0 ? (
              this.props.cart.map((cartItem) => (
                <Tr key={cartItem.product.id}>
                  <Td>{cartItem.product.productName}</Td>
                  <Td>{cartItem.product.unitPrice}</Td>
                  <Td>{cartItem.quantity}</Td>
                  <Td>{cartItem.product.unitPrice * cartItem.quantity}</Td>
                  <Td>
                    <Button
                      size="md"
                      bgGradient="linear-gradient(135deg, #FA0080 0%, red 100%)"
                      _hover={{
                        bgGradient:
                          "linear-gradient(135deg, #FF0000 0%, #FF5733 100%)",
                      }}
                      mr={3}
                      border={"2px solid yellow"}
                      fontWeight={700}
                      onClick={() => this.removeFromCart(cartItem.product)}>
                      Ürünü Sepetten Çıkar
                    </Button>
                    <Button
                      mr={3}
                      size="md"
                      fontWeight={700}
                      border={"2px solid purple"}
                      bgGradient="linear-gradient(135deg, #FF9900 0%, #FF66FF 100%)"
                      _hover={{
                        bgGradient:
                          "linear-gradient(135deg, #FF3300 0%, #FF00FF 100%)",
                      }}
                      onClick={() => this.incrementQuantity(cartItem.product)}
                      color="black">
                      Ürünü Artır
                    </Button>

                    <Button
                      size="md"
                      fontWeight={700}
                      border={"2px solid red"}
                      bgGradient="linear-gradient(135deg, #FA5700 0%, #FF9A33 100%)"
                      _hover={{
                        bgGradient:
                          "linear-gradient(135deg, #FF3300 0%, #FF5700 100%)",
                      }}
                      onClick={() => this.decrementQuantity(cartItem.product)}>
                      Ürünü Azalt
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="5">Sepetiniz boş.</Td>
              </Tr>
            )}
          </Tbody>
          {this.props.cart.length > 0 && (
            <Tfoot fontSize={20} fontWeight={1000} color={"red"}>
              <Tr>
                <Td colSpan="3" />
                <Td>Toplam Tutar:</Td>
                <Td>{this.calculateTotalPrice().toFixed(2)} TL</Td>
                <Td></Td>
              </Tr>
            </Tfoot>
          )}
        </Table>
      </Box>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      incrementQuantity: bindActionCreators(
        cartActions.incrementQuantity,
        dispatch
      ),
      decrementQuantity: bindActionCreators(
        cartActions.decrementQuantity,
        dispatch
      ),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);

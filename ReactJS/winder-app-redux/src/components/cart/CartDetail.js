import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Box, Text, Button, Divider, Image, HStack } from "@chakra-ui/react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"; // React Icons eklenmiş
import alertify from "alertifyjs";
import nullImage from "../images/nullimages.jpeg";

class CartDetail extends React.Component {
  incrementQuantity = (product) => {
    this.props.actions.incrementQuantity(product);
    alertify.success(`${product.productName} sepete eklendi`);
  };

  decrementQuantity = (product) => {
    this.props.actions.decrementQuantity(product);
    alertify.error(`${product.productName} sepetten eksildi`);
  };

  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.error(`${product.productName} sepetten silindi`);
  };

  calculateTotalPrice = () => {
    const { cart } = this.props;
    return cart.reduce((total, cartItem) => {
      return total + cartItem.product.unitPrice * cartItem.quantity;
    }, 0);
  };

  render() {
    return (
      <Box p={5} bg={"gold"} color="white">
        <Text
          fontSize={24}
          fontWeight={800}
          bgGradient="linear(to-r, #FF0080, #7928CA)"
          borderRadius={"10"}
          p={5}
          mb={5}
          borderTop={"2px solid yellow"}>
          Sepet İçeriği
        </Text>
        {this.props.cart.length > 0 ? (
          this.props.cart.map((cartItem, index) => {
            const productImage = cartItem.product.image || nullImage;

            return (
              <HStack
                borderLeft={"5px solid yellow"}
                borderBottom={"5px solid yellow"}
                borderRadius={10}
                key={cartItem.product.id}
                spacing={5}
                align="center"
                mb={4}>
                <Image
                  m={3}
                  src={productImage}
                  alt={cartItem.product.productName}
                  maxH={265}
                  borderRadius="lg"
                  boxShadow="md"
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.02)" }}
                />

                <Box flex="1" m={2} p={2}>
                  <Text fontSize="md" fontWeight="900" color="purple">
                    Ürün Adı: {cartItem.product.productName}
                  </Text>
                  <Text fontSize="md" fontWeight="900" color="purple">
                    Ürün Fiyatı: {cartItem.product.unitPrice} TL
                  </Text>
                  <Text fontSize="md" fontWeight="900" color="purple">
                    Ürün Adeti: {cartItem.quantity}
                  </Text>
                  <Text fontSize="md" fontWeight="900" color="purple">
                    Toplam Fiyat:{" "}
                    {cartItem.product.unitPrice * cartItem.quantity} TL
                  </Text>
                  <hr />
                  <Button
                    leftIcon={<FaTrash />}
                    bgGradient="linear(to-r, #FA0080, #FF5733)"
                    _hover={{
                      bgGradient: "linear(to-r, #FF0000, #FF5733)",
                    }}
                    mr={3}
                    borderWidth="2px"
                    borderColor="yellow"
                    borderRadius={50}
                    p={3}
                    onClick={() => this.removeFromCart(cartItem.product)}>
                    Sepetten Çıkar
                  </Button>
                  <Button
                    leftIcon={<FaPlus />}
                    mr={3}
                    fontWeight={700}
                    borderWidth="2px"
                    borderColor="purple"
                    bgGradient="linear(to-r, #FF9900, #FF66FF)"
                    _hover={{
                      bgGradient: "linear(to-r, #FF3300, #FF00FF)",
                    }}
                    borderRadius={50}
                    p={3}
                    onClick={() => this.incrementQuantity(cartItem.product)}>
                    Artır
                  </Button>
                  <Button
                    leftIcon={<FaMinus />}
                    fontWeight={700}
                    borderWidth="2px"
                    borderColor="red"
                    bgGradient="linear(to-r, #FA5700, #FF9A33)"
                    _hover={{
                      bgGradient: "linear(to-r, #FF3300, #FF5700)",
                    }}
                    borderRadius={50}
                    p={3}
                    onClick={() => this.decrementQuantity(cartItem.product)}>
                    Azalt
                  </Button>
                </Box>
                {index < this.props.cart.length - 1 && (
                  <Divider orientation="vertical" borderColor="gray.500" />
                )}
              </HStack>
            );
          })
        ) : (
          <Text fontSize={24} textAlign="center" fontWeight="800" color="black">
            Sepetiniz boş
          </Text>
        )}
        {this.props.cart.length > 0 && (
          <Box
            position="flex"
            p={3}
            borderWidth={2}
            borderRadius="lg"
            borderColor="purple"
            bgColor="white">
            <Text
              fontSize={20}
              fontWeight="800"
              color="red"
              textAlign={"center"}>
              Sipariş Detayı Toplam Tutar:{" "}
              {this.calculateTotalPrice().toFixed(2)} TL
            </Text>
          </Box>
        )}
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

import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import alertify from "alertifyjs";
import nullImage from "../images/nullimages.jpeg";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ quantity: 1, product });
    alertify.success(product.productName + " sepete eklendi");
  };

  const productImage = product.image || nullImage;

  return (
    <Box
      maxW="md"
      borderWidth="1px solid yellow"
      borderRadius="lg"
      m={2}
      minW={"265"}
      overflow="hidden"
      bgGradient="linear(to-r, #FF3300, #FF00FF)"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}>
      <Image
        src={productImage}
        alt={product.productName}
        m={3}
        maxW={220}
        minH={235}
        minW={220}
        maxH={235}
        mx="auto"
        borderRadius="lg"
        boxShadow="md"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
      />
      <Box p={6}>
        <Text fontSize="xl" fontWeight="900" color="gold" textAlign="center">
          <Link to={`/saveproduct/${product.id}`}>{product.productName}</Link>
        </Text>
        <Text fontSize="lg" fontWeight="600" color="purple" textAlign="center">
          Ürün Fiyatı: {product.unitPrice}
        </Text>
        <Text fontSize="lg" fontWeight="600" color="purple" textAlign="center">
          Ürün Adeti: {product.quantityPerUnit}
        </Text>
        <Text fontSize="lg" fontWeight="600" color="purple" textAlign="center">
          Ürün Stok Adeti: {product.unitsInStock}
        </Text>
      </Box>
      <Box p={6} display="flex" justifyContent="center">
        <Button
          mt={2}
          size="md"
          fontWeight="800"
          bgGradient="linear(to-r, #FF9900, #FF66FF)"
          _hover={{
            bgGradient: "linear(to-r, #FF3300, #FF00FF)",
          }}
          border="2px solid purple"
          onClick={handleAddToCart}>
          Sepete Ekle
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;

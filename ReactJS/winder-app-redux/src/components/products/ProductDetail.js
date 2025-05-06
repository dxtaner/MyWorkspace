import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

const ProductDetail = ({ categories, product, onSave, onChange, errors }) => {
  return (
    <Box
      bgGradient="linear(to-r, #FF2080, #FEEE00)"
      p={10}
      borderRadius="md"
      boxShadow="md">
      <form onSubmit={onSave}>
        <Text fontSize="2xl" fontWeight="900" mb={4}>
          {product.id ? "Ürünü Güncelle" : "Ürünü Ekle"}
        </Text>
        <FormControl
          color="black"
          fontWeight={800}
          isInvalid={errors.productName !== ""}>
          <FormLabel>Ürün Adı</FormLabel>
          <Input
            type="text"
            name="productName"
            borderColor={errors.productName ? "red.500" : "purple"}
            value={product.productName || ""}
            onChange={onChange}
            isRequired
            _focus={{
              borderColor: "yellow.300",
            }}
            _hover={{
              backgroundColor: "gray.100",
            }}
            bg={"white"}
          />
          <Text color="red" p={2}>
            {errors.productName}
          </Text>
        </FormControl>

        <FormControl
          color="black"
          fontWeight={800}
          isInvalid={errors.image !== ""}>
          <FormLabel>Ürün Resmi Linki</FormLabel>
          <Input
            type="text"
            name="image"
            borderColor={errors.image ? "red.500" : "purple"}
            value={product.image || ""}
            onChange={onChange}
            isRequired
            _focus={{
              borderColor: "yellow.300",
            }}
            _hover={{
              backgroundColor: "gray.100",
            }}
            bg={"white"}
          />
          <Text color="red" p={2}>
            {errors.image}
          </Text>
        </FormControl>
        <FormControl
          color="black"
          fontWeight={800}
          mt={4}
          isInvalid={errors.categoryId !== ""}>
          <FormLabel>Kategori</FormLabel>
          <Select
            isRequired
            name="categoryId"
            value={product.categoryId || ""}
            onChange={onChange}
            borderColor={errors.categoryId ? "red.500" : "purple"}
            _focus={{
              borderColor: "yellow.300",
            }}
            bg={"white"}
            _hover={{
              backgroundColor: "gray.100",
            }}>
            <option value="">Seçiniz</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.categoryName}
              </option>
            ))}
          </Select>
          <Text color="red" p={2}>
            {errors.categoryId}
          </Text>
        </FormControl>

        <FormControl
          color="black"
          fontWeight={800}
          mt={4}
          isInvalid={errors.unitPrice !== ""}>
          <FormLabel>Ürün Fiyatı</FormLabel>
          <Input
            type="number"
            isRequired
            name="unitPrice"
            borderColor={errors.unitPrice ? "red.500" : "purple"}
            value={product.unitPrice || ""}
            onChange={onChange}
            _focus={{
              borderColor: "yellow.300",
            }}
            _hover={{
              backgroundColor: "gray.100",
            }}
            bg={"white"}
          />
          <Text color="red" p={2}>
            {errors.unitPrice}
          </Text>
        </FormControl>

        <FormControl
          color="black"
          fontWeight={800}
          mt={4}
          isInvalid={errors.quantityPerUnit !== ""}>
          <FormLabel>Birim Başına Miktar</FormLabel>
          <Input
            type="text"
            name="quantityPerUnit"
            isRequired
            borderColor={errors.quantityPerUnit ? "red.500" : "purple"}
            value={product.quantityPerUnit || ""}
            onChange={onChange}
            bg={"white"}
            _focus={{
              borderColor: "yellow.300",
            }}
            _hover={{
              backgroundColor: "gray.100",
            }}
          />
          <Text color="red" p={2}>
            {errors.quantityPerUnit}
          </Text>
        </FormControl>

        <FormControl
          color="black"
          fontWeight={800}
          mt={4}
          isInvalid={errors.unitsInStock !== ""}>
          <FormLabel>Stoktaki Birim Miktar</FormLabel>
          <Input
            type="number"
            name="unitsInStock"
            isRequired
            borderColor={errors.unitsInStock ? "red.500" : "purple"}
            value={product.unitsInStock || ""}
            onChange={onChange}
            bg={"white"}
            _focus={{
              borderColor: "yellow.300",
            }}
            _hover={{
              backgroundColor: "gray.100",
            }}
          />
          <Text color="red" p={2}>
            {errors.unitsInStock}
          </Text>
        </FormControl>

        <Button
          mt={4}
          bgGradient="linear-gradient(135deg, #FF0080 0%, #7928CA 100%)"
          color="black"
          fontWeight={800}
          border="2px solid purple"
          borderRadius="md"
          _hover={{
            bgGradient: "linear-gradient(135deg, #FF6C9D 0%, #C148E0 100%)",
          }}
          type="submit">
          Kaydet
        </Button>
      </form>
    </Box>
  );
};

export default ProductDetail;

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { Box, Heading } from "@chakra-ui/react";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product, categories, getCategories]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "productName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "Ürün ismi olmalıdır",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (hasErrors) {
      return;
    }

    saveProduct(product).then(() => {
      history.push("/");
    });
  }

  return (
    <Box p={4} bgGradient={"linear-gradient(135deg, #FF0080 0%, #7928CA 100%)"}>
      <Heading
        as="h1"
        fontSize="2xl"
        fontWeight={800}
        borderRadius={(10, 5, 10, 5)}
        borderBottom={"2px solid #FFD700"}
        bgGradient={"linear-gradient(135deg, #800080 0%, #FFFF00 100%)"}
        p={4}>
        Ürün Ekleme / Düzenleme
      </Heading>
      <Box mt={4} borderTop={"2px solid #FFD700"} borderRadius={(10, 5, 10, 5)}>
        <ProductDetail
          product={product}
          categories={categories}
          onChange={handleChange}
          onSave={handleSave}
          errors={errors}
        />
      </Box>
    </Box>
  );
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);

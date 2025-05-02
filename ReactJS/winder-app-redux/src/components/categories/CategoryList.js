import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Box, Text } from "@chakra-ui/react";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

const CategoryList = ({
  categories,
  currentCategory,
  getCategories,
  changeCategory,
  getProducts,
}) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const selectCategory = (category) => {
    changeCategory(category);
    getProducts(category.id);
  };

  return (
    <Container
      bg="orange"
      p={3}
      border={"2px solid gold"}
      borderRadius={10}
      minWidth={212}
      mb={10}
      boxShadow="base">
      <Box
        bg="gold"
        p={5}
        border={"2px solid yellow"}
        borderRadius="5px 0 5px 0"
        textAlign="center"
        mb={5}>
        <Text
          m={3}
          fontWeight="800"
          fontSize={18}
          bg="yellow"
          p={2}
          border={"1px solid gold"}
          borderRadius={10}>
          {" "}
          Kategoriler
        </Text>
      </Box>
      <div>
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => selectCategory(category)}
            style={{
              cursor: "pointer",
              backgroundColor:
                category.id === currentCategory.id ? "yellow" : "gold",
              borderRadius: "5px",
              fontWeight: "900",
              fontSize: 16,
              padding: "10px 15px",
              border:
                category.id === currentCategory.id
                  ? "2px solid purple"
                  : "gold",
              color: category.id === currentCategory.id ? "purple" : "black",
              marginBottom: "10px",
            }}>
            {category.categoryName}
          </div>
        ))}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentCategory: state.changeCategoryReducer,
  categories: state.categoryListReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
  changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
  getProducts: bindActionCreators(productActions.getProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

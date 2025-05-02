import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

const Dashboard = () => {
  const dashboardStyle = {
    background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
    minHeight: "100vh",
  };

  return (
    <Flex style={dashboardStyle}>
      <Box
        w="25%"
        boxShadow="md"
        borderRadius="md"
        mt={10}
        ml={3}
        mb={10}
        border={"2px solid purple"}>
        <CategoryList />
      </Box>

      <Flex
        w="68%"
        boxShadow="md"
        border={"2px solid purple"}
        borderRadius="md"
        mt={10}
        mb={10}
        ml={10}>
        <ProductList />
      </Flex>
    </Flex>
  );
};

export default Dashboard;

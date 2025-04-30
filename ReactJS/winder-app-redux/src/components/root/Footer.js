import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";
const footerStyle = {
  background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
  color: "white",
  padding: "20px 0",
  textAlign: "center",
  fontWeight: "900",
};

const Footer = () => {
  return (
    <Box style={footerStyle}>
      <Text fontSize="20px" fontWeight="900">
        © 2023 by{" "}
        <Link
          href="https://github.com/dxtaner"
          color="white"
          textDecoration="underline">
          dxtaner
        </Link>{" "}
        Tarafından Tasarlanmıştır.
      </Text>
    </Box>
  );
};

export default Footer;

import React, { useState } from "react";
import {
  Box,
  Heading,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const initialFormData = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialFormData);
  const toast = useToast();
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users/")
      .then((res) => res.json())
      .then((response) => {
        let loginSuccess = false;

        for (const resp of response) {
          if (
            resp.password === formData.password &&
            resp.email === formData.email
          ) {
            loginSuccess = true;
            break;
          }
        }

        if (loginSuccess) {
          toast({
            title: "Giriş Başarılı",
            description: "Başarıyla giriş yaptınız.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          history.push("/");
        } else {
          toast({
            title: "Giriş Hatası",
            description: "Hatalı Giriş Denemesi",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        toast.error("Giriş Başarısız: " + err.message);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgGradient="linear-gradient(135deg, #FF0080 0%, #7928CA 100%)">
      <Box
        className="login-form"
        background="yellow"
        borderRadius="10px"
        borderWidth="3px"
        borderColor="gold"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
        textAlign="center"
        width={800}
        p={4}
        m={4}>
        <Heading as="h2" p={2} size="2xl">
          Giriş Yap
        </Heading>
        <form onSubmit={handleSubmit}>
          {Object.keys(initialFormData).map((key) => (
            <VStack className="form-group" key={key} spacing={2}>
              <FormLabel htmlFor={key}>
                {key === "email" ? "E-Posta" : "Şifre"}:
              </FormLabel>
              <Input
                type={key === "password" ? "password" : "text"}
                id={key}
                name={key}
                fontWeight={700}
                fontSize={20}
                bg="white"
                _hover={{
                  borderColor: "purple",
                }}
                value={formData[key]}
                onChange={handleInputChange}
                isRequired
              />
            </VStack>
          ))}
          <Button
            className="form-group button"
            type="submit"
            colorScheme="green"
            size="lg">
            Giriş Yap
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;

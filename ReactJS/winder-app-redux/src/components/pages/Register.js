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
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";

const initialFormData = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

function Register() {
  const [formData, setFormData] = useState(initialFormData);
  const toast = useToast();
  const history = useHistory();

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Geçersiz E-Posta",
        description: "Lütfen geçerli bir e-posta adresi girin.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    dispatch(registerUser(formData))
      .then(() => {
        setFormData(initialFormData);
        toast({
          title: "Kayıt Başarılı",
          description: "Kaydınız başarıyla tamamlandı.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        history.push("/login");
      })
      .catch((error) => {
        toast({
          title: "Kayıt Hatası",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
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
        className="register-form"
        background="yellow"
        borderRadius="10px"
        border={"3x solid gold"}
        boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
        textAlign="center"
        width={800}
        p={4}
        m={4}>
        <Heading as="h2" p={2} size="2xl">
          Kayıt Ol
        </Heading>
        <form onSubmit={handleSubmit}>
          {Object.keys(initialFormData).map((key) => (
            <VStack className="form-group" key={key} spacing={2}>
              <FormLabel htmlFor={key}>
                {key === "confirmPassword" ? "Şifre Tekrarı" : key}:
              </FormLabel>
              <Input
                type={
                  key === "password" || key === "confirmPassword"
                    ? "password"
                    : "text"
                }
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
            Kayıt Ol
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Register;

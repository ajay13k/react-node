import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  FormHelperText,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [userid, setUserid] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
//   useEffect(() => {
//     const auth = localStorage.getItem("token");
//     if (auth) {
//       navigate("/");
//     }
//   }, []);
  const data = {
    name: name,
    price: price,
    category: category,
    company: company,
    userid: userid,
  };
  const handleAdd = async (e) => {
    if (!name || !price || !category || !company || !userid) {
      setError(true);
    }
    await axios.post(`${API.product}`, data).then((response) => {
      console.log("sdf", response);
      navigate('/')
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Text fontSize={"lg"}>Add Product</Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {error && !name && (
                  <FormHelperText color="red">
                    enter product name
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                {error && !price && (
                  <FormHelperText color="red">enter a price</FormHelperText>
                )}
              </FormControl>
            </HStack>

            <HStack>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                {error && !category && (
                  <FormHelperText color="red">enter a category name</FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />
                {error && !company && (
                  <FormHelperText color="red">enter a company name</FormHelperText>
                )}
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Userid</FormLabel>
              <Input
                type="text"
                onChange={(e) => {
                  setUserid(e.target.value);
                }}
              />
                {error && !userid && (
                  <FormHelperText color="red">enter a userid</FormHelperText>
                )}
            </FormControl>

            <Stack spacing={10}>
              <Button
                onClick={handleAdd}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                AddProduct
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
export default AddProduct;

import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config";
import { useParams } from "react-router-dom";
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

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [userid, setUserid] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const param = useParams();
  useEffect(() => {
    getProduct();
  }, []);
  const data = {
    name: name,
    price: price,
    category: category,
    company: company,
    userid: userid,
  };

  const getProduct = async () => {
    await axios.get(`${API.updateproduct}/${param.id}`).then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
      setCategory(res.data.category);
      setCompany(res.data.company);
      setUserid(res.data.userid);
    });
  };

  const handleUpdate = async (e) => {
    if (!name || !price || !category || !company || !userid) {
      setError(true);
    }

    await axios
      .put(`${API.productUpdate}/${param.id}`, data)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
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
          <Text fontSize={"lg"}>Update Product</Text>
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
                  value={name}
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
                  value={price}
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
                  value={category}
                  type="text"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                {error && !category && (
                  <FormHelperText color="red">
                    enter a category name
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input
                  value={company}
                  type="text"
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />
                {error && !company && (
                  <FormHelperText color="red">
                    enter a company name
                  </FormHelperText>
                )}
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Userid</FormLabel>
              <Input
                value={userid}
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
                onClick={handleUpdate}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Update Product
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
export default UpdateProduct;

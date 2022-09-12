import React, { useEffect, useState } from "react";
import { API } from "../config";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button,
  HStack,
  Text,
  Input,
  Box,
} from "@chakra-ui/react";
const ListProduct = () => {
  const [product, setProduct] = useState([]);
  const productlist = async () => {
    await axios.get(`${API.productlist}`).then((res) => {
      setProduct(res.data);
    });
  };
  useEffect(() => {
    productlist();
    searchProduct();
  }, []);

  const handleDelete = async (data) => {
    await axios
      .delete(`${API.deleteproduct}/${data}`)
      .then((res) => {
        productlist();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchProduct = async (e) => {
    const key = e.target.value;
    if (key) {
      await axios.get(`${API.searchProduct}/${key}`).then((res) => {
        setProduct(res.data);
      });
    } else {
      productlist();
    }
  };

  return (
    <>
      <Heading pt={4}>Product Table</Heading>
      <Box w={400} p="20px" >
        <Input pl="60px" placeholder="Search Product........" onChange={searchProduct} />
      </Box>
      <TableContainer pt={5}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Product Name</Th>
              <Th>Price</Th>
              <Th>Category</Th>
              <Th>Company</Th>
              <Th>Userid</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {product.length > 0 ? (
              product.map((item) => {
                return (
                  <>
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item.price}</Td>
                      <Td>{item.category}</Td>
                      <Td>{item.company}</Td>
                      <Td>{item.userid}</Td>
                      <Text>
                        <Td>
                          <Button onClick={() => handleDelete(item._id)}>
                            delete
                          </Button>
                        </Td>
                        <Td>
                          <Link to={"update/" + item._id}>Update</Link>
                        </Td>
                      </Text>
                    </Tr>
                  </>
                );
              })
            ) : (
              <Text pt={100} pl="500px" fontWeight="bold">
                product not found
              </Text>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListProduct;

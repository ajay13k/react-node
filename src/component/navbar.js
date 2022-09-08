import { Link } from "react-router-dom";
import { Stack, HStack, VStack, Box, Text, Center } from "@chakra-ui/react";

const Navbar = () => {
  const auth = localStorage.getItem("token");
  const logout = () => {
    localStorage.clear();
  };

  return (
    <HStack spacing="30px" w="100%" bg="#66ccff" height="60px">
      <Text>
        <Link to="/">Products</Link>
      </Text>
      <Text>
        <Link to="/add">Add Products</Link>
      </Text>
      <Text>
        <Link to="/update">Update Products</Link>
      </Text>
      <Text>
        <Link to="/profile">Profile</Link>
      </Text>
      <Text>
        {auth ? (
          <Link onClick={logout} to="/signup">
            Logout
          </Link>
        ) : (
          <Link to="/signup">Signup</Link>
        )}
      </Text>
    </HStack>
  );
};

export default Navbar;

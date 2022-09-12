import { Link } from "react-router-dom";
import { Stack, HStack, VStack, Box, Text, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("token");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <>
      <HStack spacing="30px" w="100%" bg="#66ccff" height="60px">
        {auth ? (
          <>
            <Text>
              <Link to="/">Products</Link>
            </Text>
            <Text>
              <Link to="/add">Add Products</Link>
            </Text>
            <Text>
              <Link to="/update/:id">Update Products</Link>
            </Text>
            <Text>
              <Link to="/profile">Profile</Link>
            </Text>
            <Text>
              <Link onClick={logout} to="/signup">
                Logout
                <span style={{ paddingLeft: "20px" }}>
                  {JSON.parse(auth).firstName}
                </span>
              </Link>
            </Text>
          </>
        ) : (
          <HStack pl="90%">
            <Link to="/login">Login</Link>
            <Link to="/signup">signup</Link>
          </HStack>
        )}
      </HStack>
    </>
  );
};

export default Navbar;

import { Button, Flex, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context";
import Cart from "./Cart";

const Navbar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <Flex
      justifyContent={"space-around"}
      align={"center"}
      h={"10vh"}
      bg={"teal"}
      color={"white"}
    >
      <Heading>BWI Cart</Heading>
      {location.pathname === "/" && (
        <Flex gap={10}>
          <Cart />
          <Button colorScheme="yellow" onClick={logout}>
            Logout
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;

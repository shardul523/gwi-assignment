import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";
import AuthProvider from "../../context/AuthProvider";
import CartProvider from "../../context/CartProvider";

const MainLayout = () => (
  <AuthProvider>
    <CartProvider>
      <Box bg={"gray.100"}>
        <Box as="header">
          <Navbar />
        </Box>
        <Outlet />
      </Box>
    </CartProvider>
  </AuthProvider>
);

export default MainLayout;

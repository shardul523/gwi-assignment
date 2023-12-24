import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";
import AuthProvider from "../../context/AuthProvider";

const MainLayout = () => (
  <AuthProvider>
    <Box bg={"gray.100"}>
      <Box as="header">
        <Navbar />
      </Box>
      <Outlet />
    </Box>
  </AuthProvider>
);

export default MainLayout;

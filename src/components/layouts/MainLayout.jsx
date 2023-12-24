import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";

const MainLayout = () => (
  <Box bg={"gray.100"}>
    <Box as="header">
      <Navbar />
    </Box>
    <Outlet />
  </Box>
);

export default MainLayout;

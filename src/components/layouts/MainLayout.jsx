import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";

const MainLayout = () => (
  <Container minW={"100%"}>
    <Box as="header">
      <Navbar />
    </Box>
    <Outlet />
  </Container>
);

export default MainLayout;

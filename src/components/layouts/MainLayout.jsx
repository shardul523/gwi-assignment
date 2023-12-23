import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";

const MainLayout = () => (
    <Container>
        <Box as="header">
            <Navbar/>
            <Outlet/>
        </Box>
    </Container>
)

export default MainLayout
import { Container } from "@chakra-ui/react";

const BodyLayout = ({ children }) => (
  <Container
    minH={"90vh"}
    display={"flex"}
    flexDir={"column"}
    gap={5}
    justifyContent={"center"}
    alignItems={"center"}
  >
    {children}
  </Container>
);

export default BodyLayout;

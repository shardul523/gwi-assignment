import { Container } from "@chakra-ui/react";

const BodyLayout = ({ children }) => (
  <Container
    minH={"90vh"}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    {children}
  </Container>
);

export default BodyLayout;

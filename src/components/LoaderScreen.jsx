import { Flex, Spinner } from "@chakra-ui/react";

const LoaderScreen = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} minH={"90vh"}>
      <Spinner
        size={"xl"}
        thickness="6px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal"
      />
    </Flex>
  );
};

export default LoaderScreen;

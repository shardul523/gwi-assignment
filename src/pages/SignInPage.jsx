import { useCallback, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import BodyLayout from "../components/layouts/BodyLayout";
import { useAuth } from "../context";

const SignInPage = () => {
  const { login, isLoading, isError } = useAuth();
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");

  const onSubmitHandler = useCallback(async () => {
    const username = userInput;
    const password = passInput;
    login({ username, password });
  }, [passInput, userInput, login]);

  console.log(isError);

  return (
    <BodyLayout>
      {isError && (
        <Alert status="error">
          <AlertIcon /> Invalid login credentials
        </Alert>
      )}
      <FormControl
        p={10}
        bg={"white"}
        display={"flex"}
        flexDir={"column"}
        gap={10}
        borderRadius={"lg"}
      >
        <Box>
          <FormLabel htmlFor="username-input">Username</FormLabel>
          <Input
            value={userInput}
            id="username-input"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="password-input">Password</FormLabel>
          <Input
            value={passInput}
            type="password"
            id="password-input"
            onChange={(e) => setPassInput(e.target.value)}
          />
        </Box>
        <Button
          isLoading={isLoading}
          colorScheme="teal"
          onClick={onSubmitHandler}
        >
          Sign In
        </Button>
      </FormControl>
    </BodyLayout>
  );
};

export default SignInPage;

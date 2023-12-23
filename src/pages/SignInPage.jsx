import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signInUser } from "../utility";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const SignInPage = () => {
  const userRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const { mutate } = useMutation(signInUser);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    userRef.current.value = "";
    const password = passRef.current.value;
    passRef.current.value = "";

    try {
      mutate(
        { username, password },
        { onSuccess: () => navigate("/", { replace: true }) }
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <FormControl onSubmit={onSubmitHandler}>
        <FormLabel htmlFor="username-input">Username</FormLabel>
        <Input ref={userRef} id="username-input" />
        <FormLabel htmlFor="password-input">Password</FormLabel>
        <Input ref={passRef} id="password-input" />
        <Button type="submit">Sign In</Button>
      </FormControl>
    </Container>
  );
};

export default SignInPage;

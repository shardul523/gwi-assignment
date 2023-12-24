import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { signInUser } from "../utility";
import BodyLayout from "../components/layouts/BodyLayout";
import { useAuth } from "../context";

const SignInPage = () => {
  const [, setAuth] = useAuth();
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: signInUser,
  });

  const [isPending, setIsPending] = useState(false);

  const onSubmitHandler = useCallback(async () => {
    setIsPending(true);
    const username = userInput;
    const password = passInput;

    try {
      mutate(
        { username, password },
        {
          onSuccess: (data) => {
            setAuth({ token: data.token, id: data.id });
            navigate("/", { replace: true });
          },
          onSettled: () => setIsPending(false),
        }
      );
    } catch (err) {
      console.error(err.message);
      setIsPending(false);
    }
  }, [mutate, navigate, setAuth, passInput, userInput, setIsPending]);

  return (
    <BodyLayout>
      <FormControl>
        <FormLabel htmlFor="username-input">Username</FormLabel>
        <Input
          value={userInput}
          id="username-input"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <FormLabel htmlFor="password-input">Password</FormLabel>
        <Input
          value={passInput}
          type="password"
          id="password-input"
          onChange={(e) => setPassInput(e.target.value)}
        />
        <Button isLoading={isPending} onClick={onSubmitHandler}>
          Sign In
        </Button>
      </FormControl>
    </BodyLayout>
  );
};

export default SignInPage;

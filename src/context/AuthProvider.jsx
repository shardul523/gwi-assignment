import { useCallback, useEffect, useState } from "react";
import { AuthContext } from ".";
import { useMutation, useQuery } from "@tanstack/react-query";
import { signInUser } from "../utility";
import { useNavigate } from "react-router-dom";

const savedToken = {
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
};

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    savedToken.token ? savedToken : null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useMutation({ mutationFn: signInUser });
  const { data, isSuccess } = useQuery({
    queryKey: ["validateToken"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/auth/test", {
        headers: { Authorization: `Bearer ${authToken?.token}` },
      });
      return res.ok;
    },
  });

  useEffect(() => {
    setIsLoading(true);
    if (!data && isSuccess) setAuthToken(null);
    setIsLoading(false);
  }, [data, isSuccess]);

  const login = useCallback(
    ({ username, password }) => {
      setIsLoading(true);
      mutate(
        { username, password },
        {
          onSuccess: ({ token, id }) => {
            setAuthToken({ token, id }), setIsError(false);
            navigate("/", { replace: true });
          },
          onError: () => setIsError(true),
          onSettled: () => setIsLoading(false),
        }
      );
    },
    [mutate, navigate]
  );

  const logout = useCallback(() => {
    setIsLoading(true);
    localStorage.setItem("token", "");
    localStorage.setItem("id", "");
    setAuthToken(null);
    setIsLoading(false);
    navigate("/sign-in", { replace: true });
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{ authToken, login, logout, isLoading, isError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { Navigate } from "react-router-dom";
import { useAuth } from "../context";
import HomePage from "../pages/HomePage";
import { useEffect, useState } from "react";
import { validateToken } from "../utility";

const HomeRoute = () => {
  const [auth] = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const validateUser = async () => {
      const isTokenValid = await validateToken(auth);
      setIsValidated(isTokenValid);
      setIsLoading(false);
    };

    validateUser();
  }, [auth]);

  if (isLoading) return <div>Loading...</div>;

  if (isValidated) return <HomePage />;

  return <Navigate to={"/sign-in"} replace={true} />;
};

export default HomeRoute;

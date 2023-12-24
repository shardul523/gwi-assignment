import { Navigate } from "react-router-dom";

import SignInPage from "../pages/SignInPage";

import LoaderScreen from "../components/LoaderScreen";
import { useAuth } from "../context";

const SignInRoute = () => {
  const { authToken, isLoading } = useAuth();

  if (isLoading) return <LoaderScreen />;

  if (authToken) return <Navigate to={"/"} replace />;

  return <SignInPage />;
};

export default SignInRoute;

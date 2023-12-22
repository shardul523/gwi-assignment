import { Navigate } from "react-router-dom";
import { useAuth } from "../context";
import SignInPage from "../pages/SignInPage";

const SignInRoute = () => {
  const [auth] = useAuth();

  if (auth) return <Navigate to={"/"} replace />;

  return <SignInPage />;
};

export default SignInRoute;

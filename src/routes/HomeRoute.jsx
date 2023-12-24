import { Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoaderScreen from "../components/LoaderScreen";
import { useAuth } from "../context";

const HomeRoute = () => {
  const { authToken, isLoading } = useAuth();

  if (isLoading) return <LoaderScreen />;

  if (authToken) return <HomePage />;

  return <Navigate to={"/sign-in"} replace />;
};

export default HomeRoute;

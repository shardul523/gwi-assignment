import { Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import { useValidateToken } from "../hooks";
import LoaderScreen from "../components/LoaderScreen";

const HomeRoute = () => {
  const {status, data} = useValidateToken()

  switch(status) {
    case 'pending':
      return <LoaderScreen/>
    case 'success':
      if (data) return <HomePage/>
      return <Navigate to={'/sign-in'} replace/>
    default:
      return <Navigate to={'/sign-in'} replace/>
  }
};

export default HomeRoute;

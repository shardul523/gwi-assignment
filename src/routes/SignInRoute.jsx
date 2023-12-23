import { Navigate } from "react-router-dom";

import SignInPage from "../pages/SignInPage";
import { useValidateToken } from "../hooks";
import LoaderScreen from "../components/LoaderScreen";

const SignInRoute = () => {
  const {status, data} = useValidateToken()

  switch(status) {
    case 'pending':
      return <LoaderScreen/>
    case 'success':
      if (data) return <Navigate to={'/'} replace/>
      return <SignInPage/>
    default:
      return <Navigate to={'/'} replace/>
  }
};

export default SignInRoute;

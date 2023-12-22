import { useEffect, useState } from "react";
import { AuthContext } from ".";
import { fetchUser } from "../utility";

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const initializeToken = async () => {
      const user = await fetchUser(token, id);
      if (user) setAuthToken({ token, id });
    };

    if (!!id && !!token) initializeToken();
  }, []);

  return (
    <AuthContext.Provider value={[authToken, setAuthToken]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

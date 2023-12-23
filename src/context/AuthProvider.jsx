import { useState } from "react";
import { AuthContext } from ".";

const savedToken = {
  token: localStorage.getItem('token'),
  id: localStorage.getItem('id')
}

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(savedToken);

  return (
    <AuthContext.Provider value={[authToken, setAuthToken]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

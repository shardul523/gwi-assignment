import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context";
import { Navigate } from "react-router-dom";
import { validateToken } from "../utility";

const SignInPage = () => {
  const userRef = useRef();
  const passRef = useRef();
  const [auth, setAuth] = useAuth();
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const isValidToken = await validateToken(auth);
      setIsValidated(isValidToken);
    };
    checkUser();
  }, [auth]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    userRef.current.value = "";
    const password = passRef.current.value;
    passRef.current.value = "";
    console.log(username, password);

    const loginRes = await fetch(`https://dummyjson.com/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (loginRes.status !== 200) return;

    const user = await loginRes.json();
    localStorage.setItem("id", user.id);
    localStorage.setItem("token", user.token);
    setAuth({ id: user.id, token: user.token });
  };

  if (isValidated) return <Navigate to={"/"} />;

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input-container">
        <label htmlFor="username-input">Username</label>
        <input ref={userRef} type="text" id="username-input" />
      </div>
      <div className="input-container">
        <label htmlFor="password-input">Password</label>
        <input ref={passRef} type="password" id="password-input" />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInPage;

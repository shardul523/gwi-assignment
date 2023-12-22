import { useEffect, useState } from "react";

const AuthProvider = () => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const initializeToken = async () => {
      const res = await fetch(`https://dummyjson.com/auth/users/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 200) return;

      const user = await res.json();

      if (user) setAuthToken({ token, id });
    };
  }, []);
};

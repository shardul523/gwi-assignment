export const fetchUser = async (token, id) => {
  const res = await fetch(`https://dummyjson.com/auth/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  if (res.status !== 200) return null;

  const user = await res.json();

  return user;
};

export const validateToken = async (auth) => {
  if (auth && "token" in auth) {
    const response = await fetch("https://dummyjson.com/auth/test", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
    });
    return response.status === 200;
  }
};

export const signInUser = async ({ username, password }) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Login Failed");

  localStorage.setItem("id", data.id);
  localStorage.setItem("token", data.token);

  return data;
};

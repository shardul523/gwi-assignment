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

export const fetchAllProducts = async () => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=0&select=id,title,price,thumbnail,stock`
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Could Not Fetch Products");
  }

  const products = await res.json();

  return products;
};

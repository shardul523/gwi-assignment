import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context";

export const useValidateToken = () => {
  const [auth] = useAuth();
  const validationQuery = useQuery({
    queryKey: ["validateToken"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/auth/test", {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      return res.ok;
    },
  });

  return validationQuery;
};

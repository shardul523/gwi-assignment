// import { useQuery } from "@tanstack/react-query";
// import { useAuth } from "../context";

// export const useValidateToken = () => {
//   const { authToken: auth } = useAuth();
//   const validationQuery = useQuery({
//     queryKey: ["validateToken"],
//     queryFn: async () => {
//       if (!auth) return false;
//       const res = await fetch("https://dummyjson.com/auth/test", {
//         headers: { Authorization: `Bearer ${auth.token}` },
//       });
//       return res.ok;
//     },
//   });

//   return validationQuery;
//};

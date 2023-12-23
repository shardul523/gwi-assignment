import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import CartProvider from "./context/CartProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <App />
          </QueryClientProvider>
        </CartProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);

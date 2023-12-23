import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AuthProvider from "./AuthContext";
import CartProvider from "./CartContext";

const queryClient = new QueryClient();


export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          {children}
          <ReactQueryDevtools />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: { duration: 2500 },
              error: {
                duration: 4000,
                style: { color: "var(--danger)" },
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--text-lightest)",
                color: "var(--main-color)",
              },
            }}
          />
        </CartProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
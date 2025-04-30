import { createRoot } from "react-dom/client";
import "./index.css";
import MainRoutes from "./routes/Route.tsx";
import CartProvider from "./context/cartContext.tsx";
import SearchProvider from "./context/searchContext.tsx";
import AuthProvider from "./context/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <CartProvider>
      <SearchProvider>
        <MainRoutes />
      </SearchProvider>
    </CartProvider>
  </AuthProvider>
);

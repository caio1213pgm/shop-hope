import { createRoot } from "react-dom/client";
import "./index.css";
import MainRoutes from "./routes/Route.tsx";
import CartProvider from "./context/cartContext.tsx";
import SearchProvider from "./context/searchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <SearchProvider>
      <MainRoutes />
    </SearchProvider>
  </CartProvider>
);

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import PageProduct from "./pages/PageProduct.tsx";
import PageCart from "./pages/PageCart.tsx";
import CartProvider from "./context/cartContext.tsx";
import SearchProvider from "./context/searchContext.tsx";
import Home from "./pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<PageProduct />} />
          <Route path="/cart" element={<PageCart />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  </CartProvider>
);

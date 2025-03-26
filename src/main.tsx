import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import PageProduct from "./pages/PageProduct.tsx";
import PageCart from "./pages/PageCart.tsx";
import CartProvider from "./context/cartContext.tsx";

createRoot(document.getElementById("root")!).render(
	<CartProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/product" element={<PageProduct />} />
				<Route path="/cart" element={<PageCart />} />
			</Routes>
		</BrowserRouter>
	</CartProvider>
);

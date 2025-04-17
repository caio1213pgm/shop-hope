import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import PageProduct from "../pages/PageProduct";
import PageCart from "../pages/PageCart";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<PageProduct />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

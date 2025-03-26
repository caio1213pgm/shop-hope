import { ReactElement, ReactPortal } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartProvider from "../context/cartContext";

export type PropsChildren = {
  children: React.ReactNode | ReactElement | ReactPortal;
};

function Design({ children }: PropsChildren) {
  return (
    <>
      <Header />
      <CartProvider>{children}</CartProvider>
      <Footer />
    </>
  );
}

export default Design;
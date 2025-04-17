import { ReactElement, ReactPortal } from "react";
import Header from "./Header";
import Footer from "./Footer";

export type PropsChildren = {
  children: React.ReactNode | ReactElement | ReactPortal;
};

function Design({ children }: PropsChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Design;

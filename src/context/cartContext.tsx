import { createContext, useContext, useState } from "react";
import { PropsChildren } from "../layout/Design";

export type itemProps = {
  name: string | null;
  price: string | null;
  image: string | null;
  description: string | null;
  id: string | null;
};

type propsContext = {
  cart: itemProps[];
  addProduct: (product: itemProps) => void;
  removeProduct: (product: itemProps) => void;
};

export const CartContext = createContext<propsContext>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
});

export default function CartProvider({ children }: PropsChildren) {
  const [cart, setCart] = useState<itemProps[]>([]);

  function addProduct(product: itemProps) {
    setCart([...cart, product]);
  }

  function removeProduct(product: itemProps) {
    //Logica aqui
    const indexProduct = cart.findIndex((item) => item.id === product.id);
    const newCart = [...cart];
    newCart.splice(indexProduct, 1);
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}

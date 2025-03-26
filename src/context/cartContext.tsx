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
  addProduct: (cart: itemProps) => void;
};

export const CartContext = createContext<propsContext>({
  cart: [],
  addProduct: () => {},
});

export default function CartProvider({ children }: PropsChildren) {
  const [cart, setCart] = useState<itemProps[]>([]);

  function addProduct(product: itemProps) {
    setCart([{name:"", price:"", description:"", image:"", id:""}])
    console.log(cart)
  }
  
  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}

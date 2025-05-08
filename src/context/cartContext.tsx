import { createContext, useContext, useEffect, useState } from "react";
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

const CartContext = createContext<propsContext>({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
});

export default function CartProvider({ children }: PropsChildren) {
  const [cart, setCart] = useState<itemProps[]>([]);

  useEffect(() => {
    try {
      const cartStorage = localStorage.getItem("cart_bd");
      if (cartStorage) {
        const cart: itemProps[] = JSON.parse(cartStorage);
        setCart(cart);
      }
    } catch (error) {
      console.log("erro ao pegar itens do local storage", error);
    }
  }, []);

  function addProduct(product: itemProps) {
    localStorage.setItem("cart_bd", JSON.stringify([...cart, product]));
    setCart([...cart, product]);
  }

  function removeProduct(product: itemProps) {
    //Logica aqui
    const indexProduct = cart.findIndex((item) => item.id === product.id);
    const newCart = [...cart];
    newCart.splice(indexProduct, 1);
    localStorage.setItem("cart_bd", JSON.stringify(newCart));
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

import { useContext } from "react";
import { CartContext, itemProps, useCartContext } from "./cartContext";
function useCart() {
  const { cart, addProduct } = useCartContext();

  function addItemToCart(item: itemProps) {
    try {
      if(cart === undefined){
        return console.error("error")
      }
      const newCart: itemProps[] = [...cart, item];
      addProduct({name:"", price:"", description:"", image:"", id:""});
    } catch (error) {
      console.error("algo deu errado, tente novamente", error);
    }
  }

  function removeItemFromCart(itemExluido: itemProps) {
    try {
      const newCart: itemProps[] | undefined = cart?.filter(
        (item) => item.id !== itemExluido.id
      );
      setCart(newCart);
    } catch (error) {
      console.error("algo deu errado, tente novamente", error);
    }
  }

  return {
    removeItemFromCart,
    addItemToCart,
    cart,
  };
}

export default useCart;

import Design from "../layout/Design";
import ButtonReturn from "../components/ButtonReturn";
import ButtonTrash from "../components/ButtonTrash";
import { ShoppingBag, Wind } from "lucide-react";
import useCart from "../context/useCart";
import { itemProps } from "../context/cartContext";

export function TitleCart() {
  return (
    <div className="mb-2">
      <span className="flex items-center gap-2 text-2xl">
        <ShoppingBag size={30} />
        <h2>Itens adcionados ao seu carrinho: </h2>
      </span>
    </div>
  );
}

export function EmptyCart() {
  return (
    <div className="bg-white-100 flex justify-center items-center py-10 flex-col">
      <span className="flex items-center">
        <Wind />
        <h2 className="text-2xl">Seu carrinho está vazio...</h2>
      </span>

      <h3 className="text-xl">
        Dê uma olhada na nossa loja e faça suas primeiras compras
      </h3>
    </div>
  );
}

function PageCart() {
  const { cart, removeItemFromCart } = useCart();

  function calculateCartValue(cart: itemProps[]) {
    let valueCart = 0;
    cart.forEach((item) => {
      console.log(typeof item.price, item.price);
      if (item.price !== null) {
        // eslint-disable-next-line prefer-const
        let valueItem = parseFloat(item.price)
        if(valueItem > 100){
          return valueCart = valueCart + valueItem
        }else{
          return valueCart = (valueItem * 1000)
        }
      }
    });

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formatter.format(valueCart);
  }

  return (
    <Design>
      <div className="bg-blue-400 flex justify-center pt-20 px-20">
        <ButtonReturn />
        <div className="flex flex-col bg-white px-10 py-20 rounded min-h-130 min-w-250 ">
          {cart.length === 0 ? <EmptyCart /> : <TitleCart />}
          <div className="bg-white-100 rounded">
            {cart.map((item) => (
              <div className="flex w-full px-5 py-2 items-center gap-3">
                <div className="w-[100px]">
                  <img src={String(item.image)} alt="" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                </div>
                <ButtonTrash action={() => removeItemFromCart(item)} />
              </div>
            ))}
          </div>
          <div className="text-2xl flex justify-end bg-white-100">
            {cart.length > 0 ? (
              <p>Valor total: {calculateCartValue(cart)}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </Design>
  );
}

export default PageCart;

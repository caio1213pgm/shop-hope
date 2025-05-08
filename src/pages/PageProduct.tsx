/* eslint-disable @typescript-eslint/no-unused-expressions */
import Button from "../components/Button";
import ButtonReturn from "../components/ButtonReturn";
import Design from "../layout/Design";
import { useSearchParams } from "react-router";
import ButtonCart from "../components/ButtonCart";
import { itemProps } from "../context/cartContext";
import useCart from "../context/useCart";
import { useRef } from "react";
import DialogContentAddToCart from "../components/DialogContent"; 
import { useAuth } from "../context/authContext";
import DialogNotFoundUser from "../components/DialogNotFoundUser";
function PageProduct() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const image = searchParams.get("image");
  const description = searchParams.get("description");
  const id = searchParams.get("id");

  const { addItemToCart } = useCart();
  const dialogAddToCart = useRef<HTMLDialogElement>(null);
  const dialogNotFoundUser = useRef<HTMLDialogElement>(null);


  const { user } = useAuth();

  function toggleDialog(dialog: React.RefObject<HTMLDialogElement | null>) {
    if (!dialog.current) {
      return;
    }

    dialog.current.hasAttribute("open")
      ? dialog.current.close()
      : dialog.current.showModal();
  }

  function addToCart({ name, price, image, description, id }: itemProps) {
    if(!user){
      toggleDialog(dialogNotFoundUser)
      return
    }
    const item: itemProps = {
      name: name,
      price: price,
      image: image,
      description: description,
      id: id,
    };
    addItemToCart(item);
    toggleDialog(dialogAddToCart);
  }

  return (
    <Design>
      <div className="bg-blue-400 flex justify-center pt-20 px-20 min-h-[calc(100vh-82px-82px)]">
        <ButtonReturn />
        <div className="bg-white px-10 py-20 rounded flex items-start">
          <img src={image?.toString()} className="w-[400px]" />
          <div className="ml-10">
            <h1 className="text-4xl font-medium mb-1.5">{name}</h1>
            <span className="text-3xl flex">
              <p className="text-xl">R$</p>
              {price}
            </span>
            <p className="text-xl mb-2">{description}</p>

            <Button
              onClick={() => addToCart({ name, price, image, description, id })}
            >
              Adicionar ao carrinho
            </Button>
            <dialog ref={dialogAddToCart} className="m-auto outline-0 rounded-2xl">
              <DialogContentAddToCart action={() => toggleDialog(dialogAddToCart)} />
            </dialog>
            <dialog ref={dialogNotFoundUser} className="m-auto outline-0 rounded-2xl">
              <DialogNotFoundUser action={() => toggleDialog(dialogNotFoundUser)} />
            </dialog>
          </div>
        </div>
      </div>
      <ButtonCart />
    </Design>
  );
}

export default PageProduct;

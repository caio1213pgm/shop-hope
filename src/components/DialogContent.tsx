import { CircleX } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Store } from "lucide-react";
import ButtonsOfDialog from "./ButtonDialog";


function DialogContent({ action }: { action: () => void }) {
  return (
    <div className="bg-blue-800 py-15 px-10">
      <button
        className=" absolute right-2 top-1 text-white cursor-pointer transition-all duration-500 hover:scale-110"
        onClick={action}
      >
        <CircleX className="size-10" />
      </button>

      <h1 className="text-white text-3xl mb-2">
        Item adcionado ao carrinho com sucesso
      </h1>
      <div className="flex justify-between flex-col gap-3">
        <ButtonsOfDialog text="Ir para o carrinho" icon={<ShoppingCart/>} path="/cart"/>
        <ButtonsOfDialog text="Continuar comprando" icon={<Store/>} path="/"/>
      </div>
    </div>
  );
}
export default DialogContent;

import { CircleX, SquareUser , UserRoundPlus } from "lucide-react";
import ButtonsOfDialog from "./ButtonDialog";

function DialogNotFoundUser({ action }: { action: () => void }) {
  return (
    <div className="bg-blue-800 py-15 px-10">
      <button
        className=" absolute right-2 top-1 text-white cursor-pointer transition-all duration-500 hover:scale-110"
        onClick={action}
      >
        <CircleX className="size-10" />
      </button>

      <p className="text-white text-2xl font-medium mb-5">
        Para continuar, você precisa criar uma conta ou entrar em uma existente.
      </p>
      <div className="flex gap-10">
          <ButtonsOfDialog
            text="Fazer Login"
            icon={<SquareUser />}
            path="/login"
          />
          <ButtonsOfDialog text="Cria uma conta" icon={<UserRoundPlus />} path="/register" />
      </div>
    </div>
  );
}

export default DialogNotFoundUser;

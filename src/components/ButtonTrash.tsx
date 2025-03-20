import { Trash2 } from "lucide-react";

function ButtonTrash({ action }: {action: () => void}) {
  return (
    <div>
      <button onClick={action} className="cursor-pointer ">
        <Trash2 className=" size-10 transition-all duration-400 hover:size-16"/>
      </button>
    </div>
  );
}

export default ButtonTrash;

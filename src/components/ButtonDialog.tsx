import { useNavigate } from "react-router";
type ButtonDialogProps = {
  path: string;
  text: string;
  icon: React.ReactNode;
};

function ButtonsOfDialog({ path, text, icon }: ButtonDialogProps) {
  const navigate = useNavigate();
  return (
    <button
      className="bg-white p-2 rounded-xl text-xl cursor-pointer flex items-center justify-center transition-all duration-500 hover:scale-105 hover:bg-white-200 w-full gap-2"
      onClick={() => navigate(path)}
    >
      {text}
      {icon}
    </button>
  );
}

export default ButtonsOfDialog;

import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
function ButtonReturn() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)} className="text-white cursor-pointer mr-4">
        <ArrowLeft size={48} />
      </button>
    </div>
  );
}

export default ButtonReturn;

import { useNavigate } from "react-router";
import Button from "../components/Button";
import { useAuth } from "../context/authContext";
import Design from "../layout/Design";

function LogOut() {
  const { SingOut, user } = useAuth();
  const navigate = useNavigate();
  function closedAccount() {
    SingOut();
    navigate("/");
  }
  return (
    <Design>
      <div className="min-h-screen bg-blue-500">
        <div className="text-center text-white mb-10 pt-10">
          <h1 className="text-3xl font-medium">Seja bem vindo {user?.username}! </h1>
          <h3 className="text-xl">O que deseja comprar hoje?</h3>
        </div>

        <div className="flex gap-2 w-full justify-center">
          <Button onClick={() => closedAccount()}>Sair</Button>
          <Button onClick={() => navigate("/")}>Ir para vitrine</Button>
        </div>

        <div className="text-white">
            <h2>Informações sobre sua conta</h2>
            <p>Nome de usuário: {user?.username}</p>
            <p>Email: {user?.email}</p>
        </div>
      </div>
    </Design>
  );
}

export default LogOut;

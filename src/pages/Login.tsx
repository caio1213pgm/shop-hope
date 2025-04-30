import { Link, useNavigate } from "react-router";
import { ContainerLogin, InputLogin } from "../components/InputGroupLogin";
import Design from "../layout/Design";
import ButtonLogin from "../components/ButtonLogin";
import { validatedInputsLogin } from "../hooks/validatedInputs";
import { DivContainerLR, DivForm, Label } from "../components/LRComponents";
import { Eye, EyeOff } from "lucide-react";
import ButtonEye from "../components/ButtonEye";
import { useState } from "react";
import { useAuth } from "../context/authContext";

export type formProps = {
  email?: string;
  password?: string;
  username?: string;
};

function LoginPage() {
  const { SingIn, user } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [type, setType] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");

  function loginUser({ email, password, username }: formProps) {
    try {
      if (email && password && username) {
        const res = SingIn({ email, password, username });
        if (res) {
          setError(res);
          return;
        }
        navigate("/");
      }
    } catch (error) {
      console.log("aconteu um erro: ", error);
    }
  }

  console.log(user?.username);

  return (
    <Design>
      <div className="min-h-screen bg-blue-400">
        <DivContainerLR>
          <div className="text-center mb-5">
            <h1 className="text-5xl text-white font-medium">SHOPHOPE</h1>
            <h3 className="text-xl text-white">
              Faça o seu login para não perder nenhuma novidade
            </h3>
          </div>
          <DivForm>
            <div className="w-full">
              <Label>Email: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Digite seu email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </ContainerLogin>
            </div>
            <div className="w-full">
              <Label>Nome de Usuário: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Digite o nome do seu usuário"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </ContainerLogin>
            </div>
            <div className="w-full">
              <Label>Senha: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Digite sua senha"
                  type={type ? "password" : "text"}
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <ButtonEye
                  type={type}
                  setPassword={setShowPassword}
                  setType={setType}
                  showPassword={showPassword}
                  content={showPassword ? <EyeOff /> : <Eye />}
                />
              </ContainerLogin>
            </div>
            <ButtonLogin
              onClick={() => loginUser({ email, password, username })}
              disabled={!validatedInputsLogin(email, password)}
            >
              Entrar
            </ButtonLogin>
            <p className="text-red-500 text-2xl font-bold">{error}</p>
          </DivForm>
          <p className=" text-end text-white text-xl mt-2">
            Ainda não tem conta?{" "}
            <Link
              to="/register"
              className="underline text-blue-800 hover:text-white transition-colors duration-300"
            >
              Crie uma agora mesmo!
            </Link>
          </p>
        </DivContainerLR>
      </div>
    </Design>
  );
}

export default LoginPage;

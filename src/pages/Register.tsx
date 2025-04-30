import { Link, useNavigate } from "react-router";
import ButtonLogin from "../components/ButtonLogin";
import { ContainerLogin, InputLogin } from "../components/InputGroupLogin";
import { DivContainerLR, DivForm, Label } from "../components/LRComponents";
import Design from "../layout/Design";
import ButtonEye from "../components/ButtonEye";
import { Eye, EyeOff } from "lucide-react";
import { validarConfirmarSenha } from "../hooks/validatedInputs";
import { useState } from "react";
import { useAuth } from "../context/authContext";

type registerProps = {
  email: string | undefined;
  password: string | undefined;
  username: string | undefined;
};

function RegisterPage() {

  const navigate = useNavigate()

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmedPassword, setConfirmedPassword] = useState<string>();
  const [type, setType] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [username, setUsername] = useState<string>();
  const [error, setError] = useState<string>();
  const { SingUp, user } = useAuth();

  function registerUser({ email, password, username }: registerProps) {
    try {
      if (email && password && username) {
        console.log(email, password, user);
        const res = SingUp({ email, password, username });
        if (res) {
          setError(res)
          return
        }

        alert("Usuário cadastrado com sucesso!")
        navigate("/login")
      }
    } catch (error) {
      console.log("Aconteceu um erro", error);
    }
  }

  return (
    <Design>
      <div className="min-h-screen bg-blue-400">
        <DivContainerLR>
          <DivForm>
            <div className="w-full">
              <Label>Email: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Digite seu email"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </ContainerLogin>
            </div>
            <div className="w-full">
              <Label>Nome do usuário: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Digite o nome do seu usuário"
                  type="text"
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
            <div className="w-full">
              <Label>Confirmar Senha: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Confirme sua senha"
                  type="password"
                  onChange={(event) => setConfirmedPassword(event.target.value)}
                />
              </ContainerLogin>
            </div>
            <ButtonLogin
              onClick={() => registerUser({ email, password, username })}
              disabled={
                !validarConfirmarSenha(password, confirmedPassword, email)
              }
            >
              Cadastrar
            </ButtonLogin>
            <p className="text-red-500 text-xl font-bold">{error}</p>
          </DivForm>
          <p className=" text-end text-white text-xl mt-2">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="underline text-blue-800 hover:text-white transition-colors duration-300"
            >
              Fazer Login!
            </Link>
          </p>
        </DivContainerLR>
      </div>
    </Design>
  );
}
export default RegisterPage;

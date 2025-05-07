import { Link, useNavigate } from "react-router";
import ButtonLogin from "../components/ButtonLogin";
import { ContainerLogin, InputLogin } from "../components/InputGroupLogin";
import { DivContainerLR, DivForm, Label } from "../components/LRComponents";
import Design from "../layout/Design";
import ButtonEye from "../components/ButtonEye";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";

type registerProps = {
  email?: string;
  password?: string;
  confirmedPassword?: string;
  username?: string;
};

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [type, setType] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const { SingUp } = useAuth();

  function errorMessage(errors: FieldErrors<FieldValues>) {
    if (errors.email?.type === "required") {
      return "Preencha o campo de email";
    } else if (errors.email?.type === "pattern") {
      return errors.email.message?.toString();
    } else if (errors.username?.type === "required") {
      return "Preencha o campo de nome de usuário";
    } else if (errors.password?.type === "required") {
      return "Preencha o campo de senha";
    } else if (errors.password?.type === "minLength") {
      return "A senha deve ter pelo menos 8 caracteres";
    }
  }

  function registerUser(data: registerProps) {
    try {
      if (
        data.email &&
        data.password &&
        data.username &&
        data.confirmedPassword
      ) {
        const email = data.email;
        const password = data.password;
        const username = data.username;
        const confirmedPassword = data.confirmedPassword;
        if (password === confirmedPassword) {
          const res = SingUp({ email, password, username });
          if (res) {
            setError(res);
            return;
          }
          alert("Usuário cadastrado com sucesso!");
          navigate("/login");
        } else {
          setError("As senhas não conferem");
        }
      }
    } catch (error) {
      console.log("Aconteceu um erro", error);
    }
  }

  return (
    <Design>
      <div className="min-h-[calc(100vh-82px-82px)] bg-blue-400">
        <DivContainerLR>
          <DivForm>
            <div className="w-full">
              <Label>Email: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Digite seu email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message: "insira um endereço de e-mail válido",
                    },
                  })}
                />
              </ContainerLogin>
            </div>
            <div className="w-full">
              <Label>Nome do usuário: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Digite o nome do seu usuário"
                  {...register("username", {
                    required: true,
                  })}
                />
              </ContainerLogin>
            </div>
            <div className="w-full">
              <Label>Senha: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Digite sua senha"
                  type={type ? "password" : "text"}
                  {...register("password", { required: true, minLength: 8 })}
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
                  type="password"
                  placeholder="Confirme sua senha"
                  {...register("confirmedPassword")}
                />
              </ContainerLogin>
            </div>
            <ButtonLogin onClick={() => handleSubmit(registerUser)()}>
              Cadastrar
            </ButtonLogin>
            <div className="text-red-500 text-xl font-bold">
              {error}
              {errorMessage(errors)}
            </div>
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

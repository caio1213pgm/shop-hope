import { Link, useNavigate } from "react-router";
import { ContainerLogin, InputLogin } from "../components/InputGroupLogin";
import Design from "../layout/Design";
import ButtonLogin from "../components/ButtonLogin";
import { DivContainerLR, DivForm, Label } from "../components/LRComponents";
import { Eye, EyeOff } from "lucide-react";
import ButtonEye from "../components/ButtonEye";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";
export type formProps = {
  email?: string;
  password?: string;
};

function LoginPage() {
  const { SingIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [type, setType] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  function errorMesage(errors: FieldErrors<FieldValues>) {
    if (errors.email?.type === "required") {
      return "Preencha o campo de email";
    } else if (errors.email?.type === "pattern") {
      return errors.email.message?.toString();
    } else if (errors.password?.type === "required") {
      return "Preencha o campo de senha";
    } else if (errors.password?.type === "minLength") {
      return "A senha deve ter pelo menos 8 caracteres";
    }
  }

  function loginUser(data: formProps) {
    try {
      if (data.email && data.password) {
        const email = data.email;
        const password = data.password;
        const res = SingIn({ email, password });
        if (res) {
          setError(res);
          return;
        }
        navigate("/");
      }
    } catch (errar) {
      console.log("aconteu um erro: ", errar);
    }
  }

  return (
    <Design>
      <div className="min-h-[calc(100vh-82px-82px)] bg-blue-400">
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
              <Label>Senha: </Label>
              <ContainerLogin>
                <InputLogin
                  placeholder="Digite sua senha"
                  type={type ? "password" : "text"}
                  {...register("password", { required: true, minLength: 7 })}
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
            <ButtonLogin onClick={() => handleSubmit(loginUser)()}>
              Entrar
            </ButtonLogin>
            <div className="text-red-500 text-2xl font-bold">
              {errorMesage(errors)}
              {error}
            </div>
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

import { Link } from "react-router";
import { ContainerLogin, InputLogin } from "../components/InputGroupLogin";
import Design from "../layout/Design";
import ButtonLogin from "../components/ButtonLogin";
import { DivContainerLR, Form, Label } from "../components/LRComponents";



function LoginPage() {
  return (
    <Design>
      <div className="min-h-screen bg-blue-400">
        <DivContainerLR>
          <div className="text-center mb-5">
            <h1 className="text-5xl text-white font-medium">SHOPHOPE</h1>
            <h3 className="text-xl text-white">Faça o seu login para não perder nenhuma novidade</h3>
          </div>
          <Form>
            <div className="w-full">
              <Label>Email: </Label>
              <ContainerLogin>
                <InputLogin placeholder="Digite seu email" type="email" />
              </ContainerLogin>
            </div>
            <div className="w-full">
              <Label>Senha: </Label>
              <ContainerLogin>
                <InputLogin placeholder="Digite sua senha" type="password" />
              </ContainerLogin>
            </div>
            <ButtonLogin/>
          </Form>
          <p className=" text-end text-white text-xl mt-2">Ainda não tem conta? <Link to="/register" className="underline text-blue-800">Crie uma agora mesmo!</Link></p>
        </DivContainerLR>
      </div>
    </Design>
  );
}

export default LoginPage;

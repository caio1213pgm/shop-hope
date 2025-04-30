function validarEmail(email: string | undefined | null){
  return email?.toString().includes("@") && email?.toString().includes(".");
};

function validarSenha(senha: string | undefined){
  if (senha) {
    return senha?.toString().length > 6;
  }
};

function validatedInputsLogin(
  email: string | undefined,
  password: string | undefined
) {
  return validarEmail(email) && validarSenha(password);
}

const validarConfirmarSenha = (
  senha: string | undefined,
  confirmarSenha: string | undefined,
  email: string | undefined
) => {
  if(senha === confirmarSenha && validatedInputsLogin(email, senha)){
    return true
  }
  else return false
};

export { validatedInputsLogin, validarConfirmarSenha };

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return {
      valido: true,
      texto: "Digite um CPF válido! (11 dígitos)",
    };
  } else {
    return {
      valido: false,
      texto: "",
    };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return {
      valido: true,
      texto: "Senha deve ter entre 4 e 72 dígitos.",
    };
  } else {
    return {
      valido: false,
      texto: "",
    };
  }
}

export { validarCpf, validarSenha };

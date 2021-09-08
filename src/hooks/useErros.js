import { React, useState } from "react";

export default function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes);

  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    const ehValido = validacoes[name](value);
    novoEstado[name] = ehValido;
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}



function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = {
      valido: false,
      texto: "",
    };
  }
  return estadoInicial;
}

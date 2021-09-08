import React from "react";
import { Container, Typography } from "@material-ui/core";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { validarCpf, validarSenha } from "./models/cadastro";
import "./App.css";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";


export default function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider value={{cpf: validarCpf, senha: validarSenha}}>
        <FormularioCadastro onSubmit={onSubmitForm}/>
      </ValidacoesCadastro.Provider>
      
    </Container>
  );
}

function onSubmitForm(dados) {
  console.log(dados);
}


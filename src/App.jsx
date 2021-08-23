import React from "react";
import { Container, Typography } from "@material-ui/core";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import "./App.css";

export default function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro />
    </Container>
  );
}

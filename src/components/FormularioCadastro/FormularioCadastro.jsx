import React from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

export default function FormularioCadastro(params) {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            color="primary"
            defaultChecked
            type="checkbox"
          />
        }
      />
     <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            color="primary"
            defaultChecked
            type="checkbox"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

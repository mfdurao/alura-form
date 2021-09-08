import { React, useState } from "react";

import { TextField, Button } from "@material-ui/core";

export default function DadosEntrega({ onSubmit }) {
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({estado, cidade, cep, endereco, numero});
      }}
    >
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereço"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

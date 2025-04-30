"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  // 1. Declare uma variável de estado para armazenar o valor do InputBase
  const [searchText, setSearchText] = useState<string>("");

  // Função para lidar com a mudança no InputBase
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value); // Atualiza o estado conforme o usuário digita
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Pesquisando por: ${searchText}`);
    // TODO fazer/chamar função de busca
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      onSubmit={handleSearchSubmit} // Lida com a submissão do formulário
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquisar Vídeo"
        inputProps={{ "aria-label": "pesquisar vídeo" }}
        value={searchText}
        onChange={handleInputChange}
      />

      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

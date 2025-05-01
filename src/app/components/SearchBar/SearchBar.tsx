"use client";

import { ChangeEvent, FormEvent } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ISearchBar } from "@/app/interfaces/SearchBar";
import { useRouter } from "next/navigation";

const SearchBar = ({ searchText, setSearchText }: ISearchBar) => {
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Pesquisando por: ${searchText}`);
    // TODO fazer/chamar função de busca

    router.push(`/results?search_query=${searchText}`);
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", flex: 1 }}
      className="paper-component"
      onSubmit={handleSearchSubmit}
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

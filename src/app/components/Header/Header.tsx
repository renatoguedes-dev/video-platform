"use client";

import SearchBar from "../SearchBar/SearchBar";
import styles from "./header.module.css";
import Logo from "../Logo/Logo";
import ResultsDiv from "../ResultsDiv/ResultsDiv";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getVideoList } from "@/app/axios";
import getSearchResults from "@/app/utils/getSearchResults";
import { useSearch } from "@/app/contexts/SearchContext";

const Header = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { searchResults, setSearchResults } = useSearch();

  const { data } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideoList,
  });

  useEffect(() => {
    getSearchResults(data, searchText, setSearchResults);
  }, [searchText, data, setSearchResults]);

  return (
    <div className={styles.header}>
      <Logo />

      <div className={styles.searchDiv}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ResultsDiv searchResults={searchResults} />
      </div>
    </div>
  );
};

export default Header;

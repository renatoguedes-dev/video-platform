"use client"

import SearchBar from "../SearchBar/SearchBar";
import styles from "./header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <SearchBar />
    </div>
  );
};

export default Header;

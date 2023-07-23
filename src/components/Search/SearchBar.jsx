import styles from "./SearchBar.module.css";
import React from "react";
import { useModal } from "../../Hooks/ModalContext";

const SearchBar = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <div className={styles.searchbar} data-testid="searchbar">
      <input type="text" placeholder="Search" />
      <button className={styles.newbutton} onClick={handleOpenModal}>
        New
      </button>
    </div>
  );
};

export default SearchBar;

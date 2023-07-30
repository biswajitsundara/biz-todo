import styles from "./SearchBar.module.css";
import React from "react";
import { useModal } from "../../Hooks/ModalContext";

const SearchBar = () => {
  const { openModal, filterTaskData } = useModal();

  const handleOpenModal = () => {
    openModal();
  };

  const handleFilter = (e) => {
    filterTaskData(e.target.value);
  };

  return (
    <div className={styles.searchbar} data-testid="searchbar">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleFilter(e)}
      />
      <button className={styles.newbutton} onClick={handleOpenModal}>
        New
      </button>
    </div>
  );
};

export default SearchBar;

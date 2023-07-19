import styles from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={styles.searchbar} data-testid="searchbar">
      <input type="text" placeholder="Search" />
      <button className={styles.newbutton}>New</button>
    </div>
  );
};

export default SearchBar;

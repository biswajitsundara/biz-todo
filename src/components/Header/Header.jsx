import SearchBar from "../Search/SearchBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerbar} data-testid="header">
      <h1>Biz Todo</h1>
      <SearchBar />
    </div>
  );
};

export default Header;

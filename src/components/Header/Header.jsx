import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerbar} data-testid="header">
      <h1>Biz Todo</h1>
    </div>
  );
};

export default Header;

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div data-testid="footer">
      <p className={styles.footerBar}>&#169; Biswajit Sundara</p>
    </div>
  );
};

export default Footer;

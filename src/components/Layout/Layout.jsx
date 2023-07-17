import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ header, sideNav, main, footer }) => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>{header}</header>
      <div className={styles.content}>
        <aside className={styles.side}>{sideNav}</aside>
        <main className={styles.main}>{main}</main>
      </div>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
};

export default Layout;

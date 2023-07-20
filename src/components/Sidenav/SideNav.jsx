import React, { useState } from "react";
import styles from "./SideNav.module.css";

const items = [
  { icon: "fa-chalkboard", name: "Dashboard", isOpened: false },
  { icon: "fa-tasks", name: "Todos", isOpened: false },
  { icon: "fa fa-list-alt", name: "Tasks", isOpened: false },
  { icon: "fa fa-sticky-note", name: "Notes", isOpened: false },
];

const SideNav = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [sidebarItems, setSidebarItems] = useState(items);

  const handleItemClick = (index) => {
    setActiveItem(index);
    const updatedSidebarItems = sidebarItems.map((item, i) => {
      return { ...item, isOpened: i === index };
    });
    setSidebarItems(updatedSidebarItems);
  };

  return (
    <div className={styles.sidenav} data-testid="sidenav">
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.navItem} ${
            activeItem === index ? styles.active : ""
          }`}
          onClick={() => handleItemClick(index)}
        >
          <i className={`fas ${item.icon}`}></i>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SideNav;

import React from "react";
import Typography from "../Typography/Typography";
import Tab from "../Tab/Tab";
import * as styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Typography
        color="lynch"
        variant="label"
        className={styles.label}
      >
        andrii-honchar
      </Typography>
      <div className={styles.tabs}>
        <Tab to="/" label="_hello" />
        <Tab to="/about_me" label="_about_me" />
        <Tab to="/projects" label="_projects" />
        <Tab to="/contact_me" label="_contact_me" />
      </div>
    </header>
  );
};

export default Header;

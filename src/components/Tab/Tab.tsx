import React, { FC } from "react";
import Typography from "../Typography/Typography";
import { Link } from "gatsby";
import * as styles from "./Tab.module.scss";

type TabProps = {
  to: string;
  label: string;
};

const Tab: FC<TabProps> = ({ to, label }) => {
  return (
    <Link
      to={to}
      className={styles.tab}
      activeClassName={styles.active}
    >
      <Typography variant="label">
        {label}
      </Typography>
    </Link>
  );
};

export default Tab;

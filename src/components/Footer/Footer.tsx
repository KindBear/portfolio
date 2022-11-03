import React from "react";
import Typography from "../Typography/Typography";
import * as styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Typography
          variant="label"
          color="lynch"
        >
          find me in
        </Typography>
      </div>
      <div>
        <i className="ri-linkedin-fill ri-xl icon-lynch"></i>
      </div>
      <div>
        <i className="ri-instagram-fill ri-xl icon-lynch"></i>
      </div>
      <div>
        <a
          href="https://github.com/KindBear"
          target="_blanc"
          className={styles.githubLink}
        >
          <Typography
            variant="label"
            color="lynch"
          >
            @KindBear
          </Typography>
          <i className="ri-github-fill ri-xl icon-lynch"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

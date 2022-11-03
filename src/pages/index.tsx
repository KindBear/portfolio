import React from "react";
import Layout from "../components/Layout/Layout";
import Typography from "../components/Typography/Typography";
import * as styles from "./homePage.module.scss";

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.homeWrapper}>
        <main>
          <Typography variant="body">Hi all. I am</Typography>
          <Typography variant="header">Andrii Honchar</Typography>
          <Typography
            variant="subheader"
            color="indigo"
          >
            &gt; JavaScript Developer
          </Typography>
          {/* <Typography variant="body" color="lynch">// complete the game to continue</Typography> */}
          <Typography
            variant="body"
            color="lynch"
            className={styles.profileComment}
          >
            {"// find my profile on Github:"}
          </Typography>
          <Typography variant="body">
            const githubLink = “https://github.com/example/url”
          </Typography>
        </main>
      </div>
    </Layout>
  );
};

export default HomePage;

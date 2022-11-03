import React, { FC, ReactNode } from "react"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className={styles.appContainer}>
      <div className={styles.app}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
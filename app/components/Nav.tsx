"use client";

import styles from "../styles/layout.module.css";
import Image from "next/image";

export const Nav = () => {

  return (
    <nav className={styles.nav}>
        <Image
          src="/stackline_logo.svg"
          className={styles.logo}
          alt="logo"
          width={100}
          height={100}
        />
    </nav>
  );
};

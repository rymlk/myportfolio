import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Deco.module.css";
import Link from "next/link";
import React from "react";

export default function Deco() {
  return (
    <div>
      <div>
        <img className={styles.forme1} src="forme-1.png" alt="Forme1" />
        <img className={styles.forme2} src="forme-2.png" alt="Forme 2" />
        <img className={styles.forme3} src="forme-3.png" alt="Forme 3" />
        <img className={styles.forme4} src="forme-4.png" alt="Forme 4" />
        <img className={styles.forme5} src="forme-5.png" alt="Forme 5" />
        <img className={styles.forme6} src="forme-6.png" alt="Forme 6" />
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Textetitre.module.css";
import Link from "next/link";
import React from "react";

export default function Textetitre() {
  return (
    <div className={styles.blocentier}>
      <div>
        <main className={styles.container}>
          <p className={styles.textn1}>Je suis</p>
          <section className={styles.animation}>
            <div className={styles.first}>
              <div className={styles.textn2}>étudiant à l'ETNA</div>
            </div>
            <div className={styles.second}>
              <div>développeur fullstack</div>
            </div>
            <div className={styles.third}>
              <div>à la recherche d'une alternance</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

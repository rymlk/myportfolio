import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Slider.module.css";
import Link from "next/link";
import React from "react";

export default function Slider() {
  return (
    <div>
      <div className={styles.carteentier}>
        <ul className={styles.cards}>
          <li>
            <a className={styles.card}>
              <img src="fiche1.png" className={styles.card__image} alt="" />
              <div className={styles.card__overlay}>
                <div className={styles.card__header}>
                  <svg
                    className={styles.card__arc}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path />
                  </svg>

                  <div className={styles.card__headertext}>
                    <h3 className={styles.card__title}>• Développement Web</h3>
                  </div>
                </div>
                <p className={styles.card__description}>
                  Voici les différents languages que j'utilise pour le
                  développement Web. Je ne cesse d'apprendre à utiliser ces
                  différents languages en outre dans ma formation à l'ETNA mais
                  aussi pendant mon temps libre.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

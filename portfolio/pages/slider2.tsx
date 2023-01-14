import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Slider2.module.css";
import Link from "next/link";
import React from "react";

export default function Slider2() {
  return (
    <div>
      <div className={styles.carteentier}>
        <ul className={styles.cards}>
          <li>
            <a className={styles.card}>
              <img src="fiche2.png" className={styles.card__image} alt="" />
              <div className={styles.card__overlay}>
                <div className={styles.card__header}>
                  <svg
                    className={styles.card__arc}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path />
                  </svg>

                  <div className={styles.card__headertext}>
                    <h3 className={styles.card__title}>• Logiciels utilisés</h3>
                  </div>
                </div>
                <p className={styles.card__description}>
                  J'apprécie utilisé la suite d'Adobe tel que Photoshop, After
                  Effect, Adobe Illustrator et Adobe Première Pro car ils me
                  permettent de créer des designs pour mes sites web.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <img
          className={styles.projet1pc}
          src="projet-1-pc.png"
          alt="Projet 1 PC"
        />
      </div>
    </div>
  );
}

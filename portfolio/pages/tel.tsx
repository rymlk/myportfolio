import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Card2.module.css";
import Link from "next/link";
import React from "react";

export default function Tel1() {
  return (
    <div>
      <div>
        <img
          className={styles.projet1tel}
          src="projet-1-tel.png"
          alt="Projet 1 PC"
        />
      </div>
    </div>
  );
}

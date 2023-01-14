import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Card2.module.css";
import Link from "next/link";
import React from "react";

export default function Tel2() {
  return (
    <div>
      <div>
        <img
          className={styles.projet2tel}
          src="projet-2-tel.png"
          alt="Projet 2 tel"
        />
      </div>
    </div>
  );
}

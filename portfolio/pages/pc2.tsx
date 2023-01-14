import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Pc2.module.css";
import Link from "next/link";
import React from "react";

export default function Pc2() {
  return (
    <div>
      <div>
        <img
          className={styles.projet2pc}
          src="projet-2-pc.png"
          alt="Projet 2 PC"
        />
      </div>
    </div>
  );
}

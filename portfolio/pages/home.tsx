import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";
import Profile from "./profile";
import Terminal from "./terminal";
import Deco2 from "./deco2";

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Malki Rayane • Mon Portfolio 📃</title>
          <link rel="icon" href="/favicon.icon" />
        </Head>
        <div>
          <div>
            <Deco2 />
          </div>{" "}
          <div className={styles.titre3}>Bienvenue sur mon portfolio !</div>
        </div>
      </div>
    </div>
  );
}

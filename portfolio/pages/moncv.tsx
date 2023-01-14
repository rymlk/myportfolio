import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Moncv.module.css";
import Link from "next/link";

export default function Moncv() {
  return (
    <div className={styles.cont}>
      <button className={styles.btn}>
        <span>Mon CV</span>
        <img
          src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
          height="62"
          width="62"
        ></img>
      </button>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/TexteAnimation.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function TexteAnimation() {
  return (
    <main className={styles.container}>
      <section className={styles.animation}>
        <div className={styles.first}>
          <div>👨‍🎓 étudiant à l'ETNA</div>
        </div>
        <div className={styles.second}>
          <div>💻 développeur fullstack</div>
        </div>
        <div className={styles.third}>
          <div>😎 futur front-end dev</div>
        </div>
      </section>
    </main>
  );
}

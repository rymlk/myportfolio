/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import ModalInfo from "../components/ModalInfo";
import TexteAnimation from "../components/TexteAnimation";
import ProjectsCards from "@/components/ProjectsCards";
import FooterSocialMedia from "@/components/FooterSocialMedia";
import Decoration2 from "@/components/Decoration2";
const inter = Inter({ subsets: ["latin"] });
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main>
      <link rel="stylesheet" href="path/to/atropos.css" />
      <div>
        <div>
          <Decoration2 />
        </div>
        <header className={styles.headerbloc}>
          <div className={styles.imageprofil}>
            <div data-aos="zoom-in-up">
              <img src="memoji-final.png" alt="Mon memoji" />
            </div>
          </div>
          <div className={styles.titre1}>
            Bonjour et bienvenue sur mon portfolio !
          </div>
          <div className={styles.bloctexte}>
            <TexteAnimation />
          </div>
          <div className={styles.banners}>
            <img data-aos="zoom-in" src="banner-4.png" alt="" />
          </div>
          <div className={styles.modalinfo}>
            <ModalInfo />
          </div>
          <div className={styles.banners}>
            <img data-aos="zoom-in" src="banner-1.png" alt="" />
          </div>
          <div>
            <ProjectsCards />
          </div>
          <div className={styles.banners}>
            <img data-aos="zoom-in" src="banner-2.png" alt="" />
          </div>
          <div className={styles.cardsspecial}>
            <img data-aos="flip-up" src="front-end-card.png" alt="" />
          </div>
          <div className={styles.cards1}>
            <img data-aos="zoom-in-down" src="cardxl-full1.png" alt="" />
          </div>
          <div className={styles.cardsspecial}>
            <img data-aos="flip-up" src="back-end-card.png" alt="" />
          </div>
          <div className={styles.cards2}>
            <img data-aos="zoom-in-down" src="cardxl-full2.png" alt="" />
          </div>
          <div className={styles.cardsspecial}>
            <img data-aos="flip-up" src="design-card.png" alt="" />
          </div>
          <div className={styles.cards3}>
            <img data-aos="zoom-in-down" src="cardxl-full3.png" alt="" />
          </div>
          <div className={styles.banners}>
            <img data-aos="zoom-in" src="banner-3.png" alt="" />
          </div>
          <div className={styles.footer}>
            <FooterSocialMedia />
          </div>
        </header>
      </div>
    </main>
  );
}

/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Cardsprojets.module.css";

const Cardsprojets = () => {
  return (
    <div className={styles.cardContainer1}>
      <br />
      <br />
      <br />
      <div className={styles.cardContainer}>
        <div className={styles.card1}>
          <div className={styles.projet1}>
            <a href="http://bit.ly/3nZwSOh" target="_blank" rel="noreferrer">
              <img
                className={styles.imageprojet1}
                data-aos="zoom-in"
                src="background-card-vinspy.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.projet1}>
            <a href="http://bit.ly/3mcLgSJ" target="_blank" rel="noreferrer">
              <img
                className={styles.imageprojet1}
                data-aos="zoom-in"
                src="background-card-losnanos.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.cardContainer}>
        <div className={styles.card3}>
          <div className={styles.projet1}>
            {" "}
            <img
              className={styles.imageprojet1}
              data-aos="zoom-in"
              src="background-card-mentorgoal.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.projet1}>
            {" "}
            <img
              className={styles.imageprojet1}
              data-aos="zoom-in"
              src="background-card-etnapp.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsprojets;

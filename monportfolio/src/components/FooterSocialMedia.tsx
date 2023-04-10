/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Socialmedia.module.css";
import React from "react";

export default function FooterSocialmedia() {
  return (
    <div className={styles.allsocials}>
      <div className={styles.LinkedinDiv}>
        <a href="https://www.linkedin.com/in/rayane-malki-64571a253/">
          <div className={styles.bloc5}>
            <img
              className={styles.linkedinlogo}
              src="logolinkedin.png"
              alt="Linkedin Logo"
            />
          </div>
        </a>
      </div>
      <div className={styles.WhatsappDiv}>
        <a href="tel:+33752457372">
          <div className={styles.bloc6}>
            <img
              className={styles.whatsapplogo}
              src="logowhatsapp.png"
              alt="Linkedin Logo"
            />
          </div>
        </a>
      </div>
      <div className={styles.MailDiv}>
        <a href="mailto:contact.malkirayane@gmail.com">
          <div className={styles.bloc7}>
            <img
              className={styles.maillogo}
              src="logomail.png"
              alt="Mail Logo"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

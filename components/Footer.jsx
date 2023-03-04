import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" fill style={{ objectFit: "cover" }} alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.motto}>
          <h2>OH ,YES , WE DID WELL BAKED SLICE OF PIZZA</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            4567 Y. Don Mark #304.
            <br /> Atalanta,5678
            <br /> (54345) 456-789
          </p>
          <p className={styles.text}>
            4567 Y. Don Mark #304.
            <br /> Atalanta,5678
            <br /> (54345) 456-789
          </p>
          <p className={styles.text}>
            4567 Y. Don Mark #304.
            <br /> Atalanta,5678
            <br /> (54345) 456-789
          </p>
          <p className={styles.text}>
            4567 Y. Don Mark #304.
            <br /> Atalanta,5678
            <br /> (54345) 456-789
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            SATURDAY-SUNDAY
            <br /> 12:00 - 23:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

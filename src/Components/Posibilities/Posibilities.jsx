import React from "react";
import styles from "./Posibilities.module.scss";
import { possibilities } from "../config";
import aplhabetIMG from "../../Images/Alphabet.svg";
export const Posibilities = () => (
  <div className={styles.sectionPosibiilities}>
    {possibilities.map(({ title, text, img, color }, index) => {
      return (
        <div className={styles.containerPosibilities} key={index}>
          <div className={styles.circle} style={{ background: color }}>
            <img src={img} />
          </div>
          <div className={styles.containerPosibilitiesText}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      );
    })}
  </div>
);

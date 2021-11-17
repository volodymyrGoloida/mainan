import React from "react";
import styles from "./Posibilities.module.scss";
import { possibilities } from "../config";
import aplhabetIMG from "../../Images/Alphabet.svg";
export const Posibilities = () => (
  <div className={styles.sectionPosibiilities}>
    {possibilities.map((el, index) => {
      return (
        <div className={styles.containerPosibilities} key={index}>
          <div className={styles.circle}>
            <img src={aplhabetIMG} />
          </div>
          <div className={styles.containerPosibilitiesText}>
            <h1>{el.title}</h1>
            <p>{el.text}</p>
          </div>
        </div>
      );
    })}
  </div>
);

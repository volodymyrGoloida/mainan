import React from "react";
import styles from "./Feature.module.scss";
import featureSVG from "../../Images/feature.svg";
import featureIMG from "../../Images/featureIMG2.png";
import { featureStatistic } from "../config";
const Feature = () => (
  <div className={styles.section}>
    <div className={styles.feature}>
      <div className={styles.clients}>
        <div>
          <img src={featureIMG} />
        </div>
        <div className={styles.clientsDescription}>
          <h3>Fitri Nuraeni</h3>
          <p className={styles.aboutClient}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <hr />
      <div className={styles.response}>
        {featureStatistic.map((el, index) => {
          return (
            <div className={styles.statistic}>
              <h2>{el.count}</h2>
              <p className={styles.aboutClient}>{el.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Feature;

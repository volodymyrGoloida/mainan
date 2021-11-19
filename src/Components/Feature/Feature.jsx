import React from "react";
import styles from "./Feature.module.scss";
import defaultStyles from "../UIstyles/stylesUI.module.scss";

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
            <div key={index} className={styles.statistic}>
              <h2>{el.count}</h2>
              <p className={styles.aboutClient}>{el.description}</p>
            </div>
          );
        })}
      </div>
    </div>
    <div className={defaultStyles.defaultSection}>
      <div>
        <h1 className={defaultStyles.defaultSectionTitle}>
          Why Mainan. Important <br />
          for Children's Brain
        </h1>
      </div>
      <div className={defaultStyles.defaultSectionText}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus
          sit amet justo venenatis rhoncus vel sed dolor. Curabitur malesuada
          tellus at nibh aliquet lacinias vel sed dolor.
        </p>
      </div>
    </div>
  </div>
);

export default Feature;

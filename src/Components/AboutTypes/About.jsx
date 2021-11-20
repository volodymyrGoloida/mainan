import React from "react";
import styles from "./About.module.scss";
import defaultStyles from "../UIstyles/stylesUI.module.scss";
import { aboutItems } from "../config";
const About = () => {
  return (
    <>
      <div className={styles.aboutSection}>
        <div className={styles.aboutPhoto}></div>
        <div className={styles.aboutTextSection}>
          <h4>ABOUT MAINAN.</h4>
          <h1 className={defaultStyles.defaultSectionTitle}>
            Educational materials for development of smart children
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
            risus sit amet justo venenatis rhoncus vel sed dolor. Curabitur
            malesuada tellus at nibh aliquet lacinia nenatis rhoncus vel sed
            dolor.
          </p>
        </div>
      </div>
      <div className={styles.printAble}>
        <div>
          <h4>OUR BESR PRINTABLE</h4>
          <h1 className={defaultStyles.defaultSectionTitle}>
            Mainan Printable types
          </h1>
        </div>
        <div className={styles.aboutItems}>
          {aboutItems.map(({ imgURL, title, text }, index) => {
            return (
              <div className={styles.aboutItem}>
                <div>
                  <img src={imgURL} />
                </div>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;

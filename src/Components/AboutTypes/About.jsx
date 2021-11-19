import React from "react";
import styles from "./About.module.scss";
import defaultStyles from "../UIstyles/stylesUI.module.scss";
const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutPhoto}></div>
      <div className={styles.aboutTextSection}>
        <h4>ABOUT MAINAN.</h4>
        <h1 className={defaultStyles.defaultSectionTitle}>
          Educational materials for development of smart children
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a risus
          sit amet justo venenatis rhoncus vel sed dolor. Curabitur malesuada
          tellus at nibh aliquet lacinia nenatis rhoncus vel sed dolor.
        </p>
      </div>
    </div>
  );
};

export default About;

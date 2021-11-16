import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <div className={styles.education}>
          <hr />
          <h3>#1 BEST EDUCATION FOR KIDS</h3>
        </div>
        <div className={styles.educationDescription}>
          <h1>
            Teach children to
            <br /> learn while playing
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <button>Explore</button>
        </div>
      </div>

      <div className={styles.headerPhoto}></div>
      <div className={styles.circle}></div>
      <div className={styles.halfCircle}></div>
      <div className={styles.rhino}></div>
    </div>
  );
};

export default Header;

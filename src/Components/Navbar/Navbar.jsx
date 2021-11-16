import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import MainanText from "../../Images/Mainan.svg";
import Alphabet from "../../Images/Alphabet.svg";
import { navbarItems } from "../config";
function Navbar() {
  window.styles = styles;
  const [activeLink, setActiveLink] = useState(null);

  function handleMouseOver(index) {
    setActiveLink(index);
  }
  function handleMouseOut() {
    setActiveLink(null);
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.mainanlogo}>
        <div className={styles.rectangle}>
          <img src={Alphabet} alt="alphaberKubik" />
        </div>
        <img src={MainanText} alt="logotext" />
      </div>
      <div className={styles.links}>
        {navbarItems.map((el, index) => {
          return (
            <a
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={setActiveLink}
              className={
                activeLink === index
                  ? styles.linkToSection + " " + styles.activeLink
                  : styles.linkToSection
              }
              href="#"
              key={el}
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;

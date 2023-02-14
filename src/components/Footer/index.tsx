/* eslint-disable @next/next/no-img-element */
import React from "react";
import AngularRect from "@/media/icons/AngularRect";
import styles from "../../styles/Landing.module.css";

const Footer = (props: { width: number }) => {
  return (
    <footer className={styles.footer}>
      <AngularRect
        width={props.width}
        style={{ position: "absolute", bottom: -100, zIndex: -1 }}
      />

      <div className={styles["inner-footer-container"]}>
        <p>Need help?</p>

        <p>coopers@coopers.pro</p>
        <h5>© 2021 Coopers. All rights reserved.</h5>
      </div>

      <img
        src={"/images/BGfooter.png"}
        alt="arrow background"
        style={{
          position: "absolute",
          bottom: 0,
          width: props.width / 2,
          maxWidth: "700px",
        }}
      />
    </footer>
  );
};

export default Footer;

import React from "react";
import { Card, TextField } from "@mui/material";
import Arrow from "/src/Assets/Logo/right-arrow.svg";
import styles from "./Main.module.css";

const Description = () => {
  return (
    <div>
      <Card style={{ padding: "140px 62px 112px 62px" }}>
        <div style={{ color: "#B9B9B9" }}>Lorem Ipsum Dolor Sit</div>
        <div className={styles.textTitle} style={{ color: "#FFFFFF" }}>
          What we are?
        </div>
        <div
          className={styles.textDesc}
          style={{ color: "#FFFFFF", maxWidth: 460, paddingTop: 16 }}
        >
          Mauris bibendum, odio sit amet blandit luctus, ex ex ultrices massa,
          id aliquet dui justo non sapien. Vestibulum hendrerit efficitur justo
          sit amet tincidunt. Nunc ut elementum risus.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "64px",
          }}
        >
          <div style={{ color: "#50BFA5", fontSize: "16px" }}>SEE MORE </div>
          <div style={{ paddingLeft: "18px", paddingTop: "1px" }}>
            <Arrow />
          </div>
        </div>
      </Card>
      <hr
        style={{
          borderColor: "#EB0029",
          marginTop: 0,
          backgroundColor: "#EB0029",
          height: 2,
        }}
      />
    </div>
  );
};

export default Description;

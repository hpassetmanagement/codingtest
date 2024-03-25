import React from "react";
import styles from "./Main.module.css";
import Arrow from "/src/Assets/Logo/right-arrow.svg";
import { Card, TextField } from "@mui/material";

const DataCard = [
  { value: "8,23T", title: "Asset Under Management", color: "#F1F1F1" },
  { value: "8,23T", title: "Asset Under Management", color: "#FFFFFF" },
  { value: "8,23T", title: "Asset Under Management", color: "#002D74" },
];

const Achievement = () => {
  return (
    <div className={styles.data} style={{ padding: "162px 0px 0px" }}>
      <div className={styles.textTitle}>
        We’ve helped our investors in a big way.
      </div>
      <div className={styles.textDesc} style={{ paddingTop: 14 }}>
        Mauris bibendum, odio sit amet blandit luctus, ex ex ultrices massa, id
        aliquet dui justo non sapien
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "auto",
          paddingTop: "80px",
        }}
      >
        {DataCard?.map((e, i) => {
          return (
            <Card
              key={i}
              style={{
                backgroundColor: `${e.color}`,
                maxHeight: "200px",
                textAlign: "end",
                padding: "36px 32px 36px",
                maxWidth: "400px",
                width: "100%",
                margin: "auto",
              }}
            >
              <Arrow className={styles.arrowUp} />
              <div
                className={styles.historyData}
                style={{
                  color: `${e.color === "#002D74" ? "#FFFFFF" : "#002D74"}`,
                }}
              >
                {e.value}
              </div>
              <div className={styles.historyTitle}>{e.title}</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Achievement;

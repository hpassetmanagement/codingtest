import React from "react";
import styles from "./Main.module.css";
import Arrow from "/src/Assets/Logo/right-arrow.svg";
import { Card, TextField } from "@mui/material";
import Maps from "/src/Assets/Logo/maps.png";

const Contact = [
  {
    name: "Media Relations",
    contact: "hello@hpam.co.id",
  },
  {
    name: "Investor Relations",
    contact: "investor@hpam.co.id",
  },
  {
    name: "Customer Service",
    contact: "cs@hpam.co.id",
  },
];

const Contacts = () => {
  return (
    <div className={styles.products}>
      <div
        style={{
          color: "#50BFA5",
          fontSize: "36px",
          lineHeight: "43px",
        }}
      >
        Wanna Invest?
      </div>
      <div className={styles.textTitle}>Contact Us</div>
      <div className={styles.maps}>
        <img src={Maps} style={{ maxWidth: "1200px", width: "100%" }}></img>
        <div className={styles.mapsInfo}>
          Tamara Center Lantai 7, Jl. Jend. Sudirman Kav. 24 Jakarta Pusat
        </div>
      </div>
      <div className={styles.contactContainer}>
        {Contact?.map((e, i) => {
          return (
            <Card
              key={i}
              className={styles.productCard}
              style={{
                backgroundColor: `${i % 2 === 0 ? "#F1F1F1" : "#002D74"}`,
              }}
            >
              <Arrow className={styles.arrowDiagonal} />
              <div className={styles.productOption}>
                <div
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    textAlign: "start",
                  }}
                >
                  <div
                    className={styles.contactInfo}
                    style={{
                      color: `${i % 2 === 0 ? "#002D74" : "#FFFFFF"}`,
                    }}
                  >
                    {e.contact}
                  </div>
                  <div
                    style={{
                      color: "#50BFA5",
                      fontSize: "16px",
                      paddingTop: 18,
                    }}
                  >
                    {e.name}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className={styles.products}>
        <div style={{ fontWeight: "600", fontSize: "20px" }}>
          All investing involves risk.
        </div>
        <div
          style={{ paddingTop: "24px", fontSize: "20px", lineHeight: "24px" }}
        >
          Etiam et faucibus purus, vel fermentum libero. Proin eget egestas
          tortor. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Fusce lacus augue, fermentum at posuere a,
          luctus vel libero. In quis leo vulputate leo varius laoreet sed ac
          neque. Praesent finibus, risus quis scelerisque luctus, ipsum metus
          finibus diam, vitae egestas nulla libero a justo. Donec quis orci
          imperdiet, pretium neque id, pulvinar nisl. Pellentesque in egestas
          sapien, vitae auctor augue. Sed nisl tortor, convallis eu sollicitudin
          commodo, tempus sed urna. Praesent a nisi sed massa finibus luctus.
          Pellentesque vitae diam et dui lacinia egestas. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Vivamus facilisis pellentesque eros, in posuere diam tempor in. Fusce
          semper felis at vehicula commodo.
        </div>
      </div>
    </div>
  );
};

export default Contacts;

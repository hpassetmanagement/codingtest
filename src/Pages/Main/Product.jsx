import React from "react";
import styles from "./Main.module.css";
import Arrow from "/src/Assets/Logo/right-arrow.svg";
import { Card, TextField } from "@mui/material";

const Products = [
  {
    name: "All",
    products: [
      {
        value: "RDUM",
        market: "HPAM Ultima Money Market",
      },

      {
        value: "RDUM",
        market: "HPAM Ultima Money Market",
      },

      {
        value: "RDUM",
        market: "HPAM Ultima Money Market",
      },

      {
        value: "RDUM",
        market: "HPAM Ultima Money Market",
      },
    ],
  },
  {
    name: "Money Market",
    products: [],
  },
  {
    name: "Campuran",
    products: [],
  },
  {
    name: "Fixed Income",
    products: [],
  },
  {
    name: "Equity",
    products: [],
  },
];

const Product = ({ activeBtn, setActiveBtn }) => {
  return (
    <div className={styles.products}>
      <div
        style={{
          color: "#50BFA5",
          fontSize: "36px",
          lineHeight: "43px",
        }}
      >
        Best craft for you
      </div>
      <div className={styles.textTitle}>Discover Our Products</div>
      <div className={styles.productSelection}>
        {Products?.map((e, i) => {
          return (
            <div key={i}>
              <div
                style={{
                  color: `${activeBtn === e?.name ? "#002D74" : "#B9B9B9"}`,
                }}
                onClick={() => {
                  setActiveBtn(e?.name);
                }}
              >
                {e.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.productContainer}>
        {Products?.map((e, i) => {
          return (
            <div>
              {e.name === activeBtn && (
                <div
                  className={styles.scrollable}
                  style={{
                    overflowX: "scroll",
                  }}
                >
                  <div className={styles.scrollContainer}>
                    {e?.products?.map((x) => {
                      return (
                        <div style={{ paddingRight: 20 }}>
                          <Card className={styles.productCard} key={i}>
                            <Arrow />
                            <div className={styles.productOption}>
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: 10,
                                  right: 10,
                                  textAlign: "end",
                                }}
                              >
                                <div
                                  className={styles.textTitle}
                                  style={{
                                    color: "#FFFFFF",
                                    fontSize: 64,
                                    paddingTop: 22,
                                  }}
                                >
                                  {x.value}
                                </div>
                                <div
                                  style={{
                                    color: "#50BFA5",
                                    fontSize: "16px",
                                    paddingTop: 18,
                                    textAlign: "initial",
                                  }}
                                >
                                  {x.market}
                                </div>
                              </div>
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;

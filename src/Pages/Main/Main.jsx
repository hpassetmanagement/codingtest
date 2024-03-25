import React, { useState } from "react";
import styles from "./Main.module.css";
import Footer from "../Footer/Footer";
import Title from "./Title";
import Description from "./Description";
import Achievement from "./Achievement";
import Product from "./Product";
import Contacts from "./Contacts";

export default function Main() {
  const [activeBtn, setActiveBtn] = useState("All");

  const handleSetActiveBtn = (btnName) => {
    setActiveBtn(btnName);
  };

  return (
    <div className={styles.mainLayout}>
      <Title />
      <Description />
      <Achievement />
      <Product activeBtn={activeBtn} setActiveBtn={handleSetActiveBtn} />
      <Contacts />
      <Footer />
    </div>
  );
}

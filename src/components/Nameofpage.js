import React from "react";
import styles from "./Nameofpage.module.css";

function Nameofpage({ title }) {
  return (
    <div className={`${styles.nameofpage} mb-16 block`}>
      <div className=" relative">
        <h1 className=" text-5xl relative w-fit m-auto">
          <span className={`${styles.firstBorder}`}></span>
          {title}
          <span className={`${styles.lastBorder}`}></span>
        </h1>
      </div>
    </div>
  );
}

export default Nameofpage;

import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, this is a full-stack web-app built on Next.js.</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="img" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Why I build this project?</h1>
          <p className={styles.postDesc}>
            The main objective behind building this full-stack project is to
            enhance my coding skills and learn something new that will help me
            become a better full-stack developer.
          </p>
          <button className={styles.btn}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

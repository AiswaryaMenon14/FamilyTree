import React from 'react';
import Family from "../../assets/family.png";
import styles from './Index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={Family} alt="Family Tree"/>
      </div>
      <div className={styles.text}>Family tree</div>
    </div>
  );
};

export default Index;

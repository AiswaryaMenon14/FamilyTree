import React from 'react';
import styles from './Index.module.css';  
import Search from '../../assets/Search.png';
import OptionPannel from "../Header/OptionPannel"

const Header = () => {
  return (
    <>
    <div className={styles.header}>
      <div>
        <span className={styles.headerLeft}>Family tree</span>
        <span className={styles.addButton}>Add</span>
      </div>
      
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>
          <img src={Search} alt="Search" />
        </span>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
      </div>
    </div>
    <OptionPannel/>
    </>
  );
};

export default Header;

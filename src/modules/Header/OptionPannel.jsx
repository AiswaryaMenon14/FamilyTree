import React, { useState } from "react";
import styles from "./OptionPannel.module.css";
import Tree from "../../assets/tree.png";
import Menu from "../../assets/list.png";
import Graph from "../../assets/graph.png";

const SettingsPanel = () => {
  const [selectedOption, setSelectedOption] = useState("tree"); // Set 'tree' as the default selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.position_inheritance_Container}>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
          Show Inheritance
        </div>
        <div className={styles.update}>
          <div className={styles.icon}>i</div>Update your position
        </div>
      </div>
      <div className={styles.iconContainer}>
        <div
          className={`${styles.iconButton} ${
            selectedOption === "tree" ? styles.selected : ""
          }`}
          onClick={() => handleOptionClick("tree")}
        >
          <img src={Tree} alt="Tree Icon" className={styles.iconImage} />
        </div>
        <div
          className={`${styles.iconButton} ${
            selectedOption === "menu" ? styles.selected : ""
          }`}
          onClick={() => handleOptionClick("menu")}
        >
          <img src={Menu} alt="Menu Icon" className={styles.iconImage} />
        </div>
        <div
          className={`${styles.iconButton} ${
            selectedOption === "graph" ? styles.selected : ""
          }`}
          onClick={() => handleOptionClick("graph")}
        >
          <img src={Graph} alt="Graph Icon" className={styles.iconImage} />
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;

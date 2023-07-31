import React, { useCallback } from 'react';

import styles from './Tabtitle.module.css';


const TabTitle = (props) => {
  const { title, setSelectedTab, index, isActive } = props;

  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li className={`${styles.title} ${isActive ? 'active' : ''}`}>
      <button className={styles.tabs__btn} onClick={handleOnClick}>{title}</button>
    </li>
  );
};

export default TabTitle;
import React, { useState } from 'react';

import styles from './Tabs.module.css';
import TabTitle from './TabTitle';


const Tabs = (props) => {
  const { children, preSelectedTabIndex } = props;

  // First tab is shown by default
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabs__nav}>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>

      {/* show selcted tab by index*/}
      {children[selectedTabIndex]}
    </div>
  );
};

export default Tabs;
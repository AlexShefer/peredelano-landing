import React from "react";

import styles from "./Tabs.module.css";
import TabTitle from "./TabTitle";

const Tabs = (props) => {
    const { children } = props;

    // First tab is shown by default
    // const [selectedTabIndex, setSelectedTabIndex] = useState(0); Moved to where

    return (
        <div className={styles.tabs}>
            <ul className={styles.tabs__nav}>
                {children.map((item, index) => (
                    <TabTitle
                        key={item.props.title}
                        title={item.props.title}
                        index={index}
                        isActive={index === props.selectedTabIndex}
                        setSelectedTab={props.setSelectedTabIndex}
                    />
                ))}
            </ul>

            {/* show selcted tab by index*/}
            {children[props.selectedTabIndex]}
        </div>
    );
};

export default Tabs;

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styles from "./ScrollUpButton.module.css";

function ScrollUpButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check the scroll position, for example, when the user scrolls down 100px, show the button
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <Link
                    to="navbar"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={styles.scroll_link}
                >
                    <BsFillArrowUpCircleFill className={styles.scroll_btn} />
                </Link>
            )}
        </>
    );
}

export default ScrollUpButton;

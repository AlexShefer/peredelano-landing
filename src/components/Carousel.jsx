import React, { useState, useEffect, useRef } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import styles from "./Carousel.module.css";

function Carousel({ data }) {
    const [slide, setSlide] = useState(0);
    const [columns, setColumns] = useState(window.innerWidth < 1024 ? 1 : 3);
    const intervalRef = useRef(null);

    const handleNextSlide = () => {
        setSlide((prevState) =>
            prevState === data.length - columns ? 0 : prevState + 1
        );
        resetInterval();
    };

    const handlePrevSlide = () => {
        setSlide((prevState) =>
            prevState === 0 ? data.length - columns : prevState - 1
        );
        resetInterval();
    };

    const resetInterval = React.useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setSlide((prevState) =>
                prevState === data.length - columns ? 0 : prevState + 1
            );
        }, 3000);
    }, [data.length, columns]);

    const handleResize = React.useCallback(() => {
        // Update the number of columns based on the screen width
        setColumns(window.innerWidth < 1024 ? 1 : 3);
    }, []);

    useEffect(() => {
        resetInterval();

        // Add event listeners on mount
        window.addEventListener("resize", handleResize);

        // Clean up event listeners on unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            // Remove the dependency on 'resetInterval' by calling the function directly
            resetInterval();
            window.removeEventListener("resize", handleResize);
        };
    }, [data.length, resetInterval, handleResize]);

    return (
        <div className={styles.carousel}>
            <BsArrowLeftCircleFill
                onClick={handlePrevSlide}
                className={`${styles.carousel__arrow} ${styles.carousel__arrow_left}`}
            />
            <div className={styles.carousel__slide_container}>
                {data.map((img, index) => {
                    return (
                        <img
                            src={img}
                            alt={img}
                            key={index}
                            className={
                                index >= slide && index < slide + columns
                                    ? styles.carousel__slide
                                    : `${styles.carousel__slide} ${styles.carousel__slide_hidden}`
                            }
                        />
                    );
                })}
            </div>
            <BsArrowRightCircleFill
                onClick={handleNextSlide}
                className={`${styles.carousel__arrow} ${styles.carousel__arrow_right}`}
            />
            <span className={styles.carousel__indicators}>
                {data.map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                index === slide
                                    ? styles.carousel__indicator_active
                                    : styles.carousel__indicator
                            }
                            onClick={() => setSlide(index)}
                        ></div>
                    );
                })}
            </span>
        </div>
    );
}

export default Carousel;

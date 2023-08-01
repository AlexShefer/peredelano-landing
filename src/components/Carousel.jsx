import React, { useState, useEffect } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import styles from "./Carousel.module.css"; // Import styles from the CSS module

function Carousel({ data }) {
    const [slide, setSlide] = useState(0);

    const handleNextSlide = () => {
        setSlide((prevState) =>
            prevState === data.length - 1 ? 0 : prevState + 1
        );
    };

    const handlePrevSlide = () => {
        setSlide((prevState) =>
            prevState === 0 ? data.length - 1 : prevState - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((prevState) =>
                prevState === data.length - 1 ? 0 : prevState + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [data.length]);

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
                                index === slide
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

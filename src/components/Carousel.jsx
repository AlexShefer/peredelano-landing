import { useState, useEffect } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import "./Carousel.css";

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
        <div className="carousel">
            <BsArrowLeftCircleFill
                onClick={handlePrevSlide}
                className="carousel__arrow carousel__arrow--left"
            />
            <div className="carousel__slide-container">
                {data.map((img, index) => {
                    return (
                        <img
                            src={img}
                            alt={img}
                            key={index}
                            className={
                                index === slide
                                    ? "carousel__slide"
                                    : "carousel__slide carousel__slide--hidden"
                            }
                        />
                    );
                })}
            </div>
            <BsArrowRightCircleFill
                onClick={handleNextSlide}
                className="carousel__arrow carousel__arrow--right"
            />
            <span className="carousel__indicators">
                {data.map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                index === slide
                                    ? "carousel__indicator carousel__indicator--active"
                                    : "carousel__indicator"
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
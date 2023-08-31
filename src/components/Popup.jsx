import React from "react";
import styles from "./Popup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "./Button";

function Popup({ location, onClose }) {
    console.log(location);
    return (
        <div className={styles.popup_background}>
            <div className={styles.popup}>
                <h2 className={styles.popup_city}>{location.city}</h2>
                <p className={styles.popup__text}>{location.description}</p>

                <div className={styles.popup__images}>
                    <img
                        src={location.img}
                        alt={location.city}
                        className={styles.popup__img}
                    />
                </div>
                <Button link={location.link} className={styles.popup__btn}>
                    присоединиться
                </Button>
                <AiFillCloseCircle
                    onClick={onClose}
                    className={styles.popup__closeButton}
                />
            </div>
        </div>
    );
}

export default Popup;

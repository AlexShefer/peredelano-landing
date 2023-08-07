import React from "react";
import styles from "./Popup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "./Button";

function Popup({ location, onClose }) {
    return (
        <div className={styles.popup_background}>
            <div className={styles.popup}>
                <h2 className={styles.popup_city}>{location.city}</h2>
                <p className={styles.popup__text}>
                    Мы, с огромнейшим трудом, смогли найти место, чтобы сделать
                    конфу в нашем стиле и с нашим концептом — уютная,
                    атмосферная вечеринка для своих, с которой вы уйдёте с
                    новыми друзьями, ответами на бытовые и карьерные вопросы, и
                    понятными планами на ближайшую жизнь
                </p>
                <p className={styles.popup__text}>
                    Устроим самый объединяющий вечер, в теплой компании своих!
                    Всё будет так: приходите по адресу в любое удобное время
                    начиная с указанного в анонсе. Вас встречают, угощают
                    велкамдринком, а дальше — вы делаете что хотите
                </p>

                <div className={styles.popup__images}>
                    <img
                        src={`./assets/events/${location.img}.jpg`}
                        alt={location.city}
                        className={styles.popup__img}
                    />
                    {/* <img
                        src={`./assets/events/${location.img}.jpg`}
                        alt={location.city}
                        className={styles.popup__img}
                    /> */}
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

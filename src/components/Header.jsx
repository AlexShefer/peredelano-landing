import React from "react";
import styles from "./Header.module.css";
import Button from "./Button";
import Navbar from "./Navbar";

function Header({ isPopupOpen }) {
    return (
        <section id="home" className={styles.first}>
            <Navbar isPopupOpen={isPopupOpen} />
            <h1 className={styles.first__title}>
                Коктейль IT{" "}
                <span className={styles.first__title_pink}>конференции</span>,
                <br />
                домашней{" "}
                <span className={styles.first__title_pink}>
                    вечеринки
                </span> и{" "}
                <span className={styles.first__title_pink}>митапа</span>
            </h1>
            <div className={styles.first__screen_logo}>
                <Button
                    type="navlink"
                    link="where"
                    className={styles.first__btn}
                >
                    выбрать город
                </Button>
            </div>
            <h2 className={styles.first__title}>
                <span className={styles.first__title_pink}>
                    приходите к нам
                </span>
                , и вас встретят,
                <br />
                как долгожданного лучшего друга
            </h2>
            <Button
                type="navlink"
                link="where"
                className={styles.first__btn__mobile}
            >
                выбрать город
            </Button>
        </section>
    );
}

export default Header;

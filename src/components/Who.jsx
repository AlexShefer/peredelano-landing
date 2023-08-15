import React from "react";
import styles from "./Who.module.css";
import Carousel from "./Carousel";

function Who() {
    const images = [
        "../assets/slider/1.webp",
        "../assets/slider/Polaroid3.png",
        "../assets/slider/2.webp",
        "../assets/slider/Polaroid4.png",
        "../assets/slider/11.webp",
        "../assets/slider/Polaroid5.png",
    ];
    return (
        <section id="who" className={styles.slides}>
            {" "}
            <div className={styles.container}>
                {" "}
                <h2 className={styles.slides__title}>
                    {" "}
                    <span className={styles.slides__title_pink}> Мы</span> — в
                    первую очередь{" "}
                    <span className={styles.slides__title_pink}>
                        сообщество
                    </span>
                </h2>
                <div className={styles.slides__row}>
                    {" "}
                    <p className={styles.slides__text}>
                        {" "}
                        Мы существуем для того, чтобы у вас на новом месте
                        появились знакомые, друзья и коллеги. Чтобы никто не был
                        один. Наши конфы проходят в формате уютной домашней
                        вечеринки.
                    </p>
                    <p className={styles.slides__text}>
                        {" "}
                        Специально для того, чтобы людям было проще сойтись и
                        подружиться.После самого ивента сообщество продолжает
                        жить в чате, бесчисленных встречах, сборах и где угодно
                        ещё.
                    </p>
                </div>
                <Carousel data={images} />
            </div>
        </section>
    );
}

export default Who;

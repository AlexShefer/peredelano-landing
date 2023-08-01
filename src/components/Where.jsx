import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import Tabs from "./Tabs";
import TabPane from "./TabPane";
import styles from "./Where.module.css";
import Popup from "./Popup";

function Where({ isPopupOpen, setIsPopUpOpen }) {
    // Send a GET request to the MirageJS server /api/events
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((json) => {
                setLocations(json.events);
            });
    }, []);

    // Function to handle card click and open the popup
    const handleCardClick = (location) => {
        setSelectedLocation(location);
        setIsPopUpOpen(true);
    };

    // Function to handle closing the popup
    const handleClosePopup = () => {
        setSelectedLocation(null);
        setIsPopUpOpen(false);
    };

    const asiaLocations = locations.filter((i) => {
        return i.continent === "asia";
    });
    const europeLocations = locations.filter((i) => {
        return i.continent === "europe";
    });
    const americaLocations = locations.filter((i) => {
        return i.continent === "america";
    });
    const africaLocations = locations.filter((i) => {
        return i.continent === "africa";
    });

    return (
        <div className={styles.locations} id="where">
            <div className={styles.wrap}>
                <h2 className={styles.locations__title}>
                    Мы создаем комьюнити{" "}
                    <span className="locations__title locations__title_blue">
                        по всему миру,
                    </span>{" "}
                    присоединяйся и в своей стране
                </h2>
                <div className={styles.row}>
                    <p className={styles.locations__text}>
                        Наша цель —{" "}
                        <span
                            className={
                                styles.locations__text &&
                                styles.locations__text_pink
                            }
                        >
                            построить
                        </span>{" "}
                        на новом месте{" "}
                        <span
                            className={
                                styles.locations__text &&
                                styles.locations__text_pink
                            }
                        >
                            сообщество единомышленников,
                        </span>{" "}
                        которые во всем поддерживают друг друга — это наш ответ
                        на вызовы, которые нам бросила жизнь.
                    </p>
                    <p className={styles.locations__text}>
                        Мы изобрели{" "}
                        <span
                            className={
                                styles.locations__text &&
                                styles.locations__text_pink
                            }
                        >
                            Peredelanoconf
                        </span>
                        , потому что увидели — сообществу русскоязычных
                        айтишников по всему миру нужна система, которая позволит
                        им{" "}
                        <span
                            className={
                                styles.locations__text &&
                                styles.locations__text_pink
                            }
                        >
                            объединяться
                        </span>{" "}
                        и{" "}
                        <span
                            className={
                                styles.locations__text &&
                                styles.locations__text_pink
                            }
                        >
                            помогать
                        </span>{" "}
                        друг другу.
                    </p>
                </div>
                <Tabs>
                    <TabPane title="Европа">
                        <div className={styles.tabs__content}>
                            {europeLocations &&
                                europeLocations.map((location, id) => (
                                    <Card
                                        key={id}
                                        date={location.date}
                                        img={location.img}
                                        city={location.city}
                                        description={location.description}
                                        link={location.link}
                                        onClick={() =>
                                            handleCardClick(location)
                                        }
                                    />
                                ))}
                        </div>
                    </TabPane>
                    <TabPane title="Азия">
                        <div className={styles.tabs__content}>
                            {asiaLocations &&
                                asiaLocations.map((location, id) => (
                                    <Card
                                        key={id}
                                        date={location.date}
                                        img={location.img}
                                        city={location.city}
                                        description={location.description}
                                        link={location.link}
                                        onClick={() =>
                                            handleCardClick(location)
                                        }
                                    />
                                ))}
                        </div>
                    </TabPane>
                    <TabPane title="Америка">
                        <div className={styles.tabs__content}>
                            {americaLocations &&
                                americaLocations.map((location, id) => (
                                    <Card
                                        key={id}
                                        date={location.date}
                                        img={location.img}
                                        city={location.city}
                                        description={location.description}
                                        link={location.link}
                                        onClick={() =>
                                            handleCardClick(location)
                                        }
                                    />
                                ))}
                        </div>
                    </TabPane>
                    <TabPane title="Африка">
                        <div className={styles.tabs__content}>
                            {africaLocations &&
                                africaLocations.map((location, id) => (
                                    <Card
                                        key={id}
                                        date={location.date}
                                        img={location.img}
                                        city={location.city}
                                        description={location.description}
                                        link={location.link}
                                        onClick={() =>
                                            handleCardClick(location)
                                        }
                                    />
                                ))}
                        </div>
                    </TabPane>
                </Tabs>
                {/* Render the Popup component if a location is selected */}
                {selectedLocation && (
                    <Popup
                        location={selectedLocation}
                        onClose={handleClosePopup} // Pass the function to close the popup
                    />
                )}
            </div>
        </div>
    );
}

export default Where;

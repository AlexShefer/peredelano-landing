import React from "react";
import "./Card.css";

const Card = ({city, date, link, description}) => {

    return (
        <>
            <div className="card">
                
                    <img src="https://static.wikia.nocookie.net/mlp/images/d/dd/My_Little_Pony_Theme_Song.png/revision/latest/scale-to-width-down/1000?cb=20130805001726&path-prefix=ru" alt="city" className="card__img" />
                <h3 className="card__title">{city}</h3>
                <p className="card__text"> {description} </p>
                <h3 className="card__title">{date}</h3>
                <a href={link} className="button">присоединиться</a>
                <svg className="mark" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                    <path d="M13 9H38V37H13V9Z" className="mark_bg"/>
                    <path d="M33 37H38V41H33V37Z" className="mark_bg"/>
                    <path d="M13 37H18V41H13V37Z" className="mark_bg"/>
                    <path d="M37.125 5H13.875V9H37.125V41H33.25V37H29.375V33H21.625V37H17.75V41H13.875V5H10V45H17.75V41H21.625V37H29.375V41H33.25V45H41V5H37.125Z" fill="#303030"/>
                </svg>
            </div>
        </>
    )
}
export default Card;
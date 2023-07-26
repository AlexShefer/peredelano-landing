import "./Header.css";
import Button from "./Button";

function Header() {
    return (
        <section className="first">
            <h1 className="first__title">
                Коктейль IT{" "}
                <span className="first__title_pink">конференции</span>
                ,<br />
                домашней <span className="first__title_pink">
                    вечеринки
                </span> и <span className="first__title_pink">митапа</span>{" "}
            </h1>
            <div className="first__screen-logo">
                <Button className="first__btn">выбрать город</Button>
            </div>
            <h2 className="first__title">
                <span className="first__title_pink">приходите к нам</span>
                , и вас встретят,
                <br />
                как долгожданного лучшего друга
            </h2>
            <Button className="first__btn__mobile">выбрать город</Button>
        </section>
    );
}

export default Header;

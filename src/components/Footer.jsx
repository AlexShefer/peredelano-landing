import Button from "./Button";
import SocialLink from "./SocialLink";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import ComputerLogo from "../assets/header/imfooter.png";
import "./Footer.css";

function Footer() {
    const socialLinks = [
        {
            name: "youtube",
            icon: AiOutlineYoutube,
            link: "https://www.youtube.com/channel/UCbILxHiByrV3fPDYxpqUlWQ",
        },
        {
            name: "telegramm",
            icon: BiLogoTelegram,
            link: "https://t.me/peredelanoconfchannel",
        },
        {
            name: "twitter",
            icon: FiTwitter,
            link: "https://twitter.com/peredelano_conf",
        },
        {
            name: "facebook",
            icon: FiFacebook,
            link: "https://www.facebook.com/peredelanoconf/",
        },
        {
            name: "instagram",
            icon: AiOutlineInstagram,
            link: "https://www.instagram.com/peredelanoconf/",
        },
    ];

    return (
        <footer id="whom" className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    <div className="footer__col">
                        <h2 className="footer__title">
                            Мы создаем комьюнити{" "}
                            <span className="footer__title-blue">
                                по всему миру
                            </span>
                            , присоединяйся и в своей стране
                        </h2>
                        <p className="footer__description">
                            Разработчик, дизайнер, менеджер или кто-то еще —{" "}
                            <span className="footer__description-pink">
                                мы рады любым мастерам своего дела
                            </span>
                            , а также новичкам
                        </p>
                        <Button
                            type="navlink"
                            link="where"
                            className="footer__button"
                        >
                            выбрать город
                        </Button>
                    </div>
                    <img
                        src={ComputerLogo}
                        className="footer__computer"
                        alt="computer peredelano"
                    />
                </div>
                <div className="footer__screen-logo"></div>
                <div className="footer__social-icons">
                    {socialLinks.map((link) => (
                        <SocialLink key={link.name} link={link} />
                    ))}
                </div>

                <p className="footer__copyright">@ PEREDELANO 2023</p>
            </div>
        </footer>
    );
}

export default Footer;

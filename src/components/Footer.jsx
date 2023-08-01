import Button from "./Button";
import SocialLink from "./SocialLink";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import ComputerLogo from "../assets/header/imfooter.png";
import styles from "./Footer..module.css";

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
        <footer id="whom" className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__row}>
                    <div className={styles.footer__col}>
                        <h2 className={styles.footer__title}>
                            Мы создаем комьюнити{" "}
                            <span className={styles.footer__title_blue}>
                                по всему миру
                            </span>
                            , присоединяйся и в своей стране
                        </h2>
                        <p className={styles.footer__description}>
                            Разработчик, дизайнер, менеджер или кто-то еще —{" "}
                            <span className={styles.footer__description_pink}>
                                мы рады любым мастерам своего дела
                            </span>
                            , а также новичкам
                        </p>
                        <Button
                            type="navlink"
                            link="where"
                            className={styles.footer__button}
                        >
                            выбрать город
                        </Button>
                    </div>
                    <img
                        src={ComputerLogo}
                        className={styles.footer__computer}
                        alt="computer peredelano"
                    />
                </div>
                <div className={styles.footer__screen_logo}></div>
                <div className={styles.footer__social_icons}>
                    {socialLinks.map((link) => (
                        <SocialLink key={link.name} link={link} />
                    ))}
                </div>
                <p className={styles.footer__copyright}>@ PEREDELANO 2023</p>
            </div>
        </footer>
    );
}

export default Footer;

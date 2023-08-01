import React from "react";
import styles from "./SocialLink.module.css";

function SocialLink({ link }) {
    return (
        <>
            <a
                href={link.link}
                key={link.name}
                className={styles.social_link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <link.icon
                    className={styles.social_link__icon}
                    aria-label={`Visit ${link.name}`}
                />
            </a>
        </>
    );
}

export default SocialLink;

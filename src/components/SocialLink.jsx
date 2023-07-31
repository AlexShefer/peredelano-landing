import React from "react";

function SocialLink({ link }) {
    return (
        <>
            <a
                href={link.link}
                key={link.name}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <link.icon
                    className="footer__social-link__icon"
                    aria-label={`Visit ${link.name}`}
                />
            </a>
        </>
    );
}

export default SocialLink;

import React from "react";

function SocialLink({ link }) {
    return (
        <>
            <a href={link.link} key={link.name} className="footer__social-link">
                <link.icon className="footer__social-link__icon" />
            </a>
        </>
    );
}

export default SocialLink;

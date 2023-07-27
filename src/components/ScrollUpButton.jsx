import React from "react";
import { Link } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./ScrollUpButton.css";

function ScrollUpButton() {
    return (
        <>
            <Link
                to="navbar"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="scroll-link"
            >
                <BsFillArrowUpCircleFill className="scroll-btn" />
            </Link>
        </>
    );
}

export default ScrollUpButton;

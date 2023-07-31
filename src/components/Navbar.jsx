import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logoPng from "../assets/header/logo_small.png";
import { Link } from "react-scroll";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
        };
        // Function to handle mousemove event
        const handleMouseMove = (event) => {
            const distanceFromMouseToTop = event.clientY;

            if (distanceFromMouseToTop <= 50 || window.scrollY === 0) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };
        // Add event listeners on mount
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        // Clean up event listeners on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <header
            id="navbar"
            className={`header ${showNavbar ? "show" : "hide"}`}
        >
            <div className="wrap">
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    tabIndex={showNavbar ? 0 : -1}
                    aria-label="Home"
                >
                    <img src={logoPng} alt="logo" className="header__logo" />
                </Link>

                <nav className="header__nav">
                    <Link
                        to="who"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="header__nav-link"
                        activeClass="header__nav-link-active"
                        tabIndex={showNavbar ? 0 : -1}
                        aria-label="Кто"
                        role="button"
                    >
                        кто
                    </Link>
                    <Link
                        to="where"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="header__nav-link"
                        activeClass="header__nav-link-active"
                        tabIndex={showNavbar ? 0 : -1}
                        aria-label="Где"
                        role="button"
                    >
                        где
                    </Link>
                    <Link
                        to="whom"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="header__nav-link"
                        activeClass="header__nav-link-active"
                        tabIndex={showNavbar ? 0 : -1}
                        aria-label="Кому"
                        role="button"
                    >
                        кому
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
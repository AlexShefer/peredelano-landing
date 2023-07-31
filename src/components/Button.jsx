import "./Button.css";
import { Link } from "react-scroll";

function Button({ children, className, type, link }) {
    return (
        <>
            {type === "navlink" ? (
                <Link
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={`button ${className}`}
                    tabIndex={0}
                    aria-label={children}
                >
                    {" "}
                    {children}{" "}
                </Link>
            ) : (
                <a
                    href={link}
                    className={`button ${className}`}
                    tabIndex={0}
                    aria-label={children}
                >
                    {children}
                </a>
            )}
        </>
    );
}

export default Button;

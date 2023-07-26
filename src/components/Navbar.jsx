import "./Navbar.css";
import logoPng from "../assets/header/logo_small.png";

function Navbar() {
    return (
        <header className="header">
            <div className="wrap">
                <img src={logoPng} alt="logo" className="header__logo" />
                <nav className="header__nav">
                    <a href="#" className="header__nav-link">
                        кто
                    </a>
                    <a href="#" className="header__nav-link">
                        где
                    </a>
                    <a href="#" className="header__nav-link">
                        кому
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;

import "./Button.css";

function Button({ children, className }) {
    return (
        <>
            <a href="#" className={`button ${className}`}>
                {children}
            </a>
        </>
    );
}

export default Button;

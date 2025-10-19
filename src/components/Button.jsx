function Button({ children, onClick, className = "" }) {
    return (
        <button onClick={onClick} className={`custom-btn ${className}`}>
            {children}
        </button>
    );
}

export default Button;
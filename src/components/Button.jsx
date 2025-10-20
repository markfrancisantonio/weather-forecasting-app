import "./Button.css";

function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button type={type} onClick={onClick} className={`custom-btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;

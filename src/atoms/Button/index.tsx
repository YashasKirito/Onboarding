import "./styles.css";

interface IButton {
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="primary">
      {children}
    </button>
  );
};

export default Button;

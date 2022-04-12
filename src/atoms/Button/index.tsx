import "./styles.css";

const Button: React.FC = ({ children }) => {
  return <button className="primary">{children}</button>;
};

export default Button;

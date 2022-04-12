import "./styles.css";

interface ICard {
  icon: string;
  title: string;
  description: string;
  selected?: boolean;
  onClick: () => void;
}

const Card: React.FC<ICard> = ({
  icon,
  title,
  description,
  selected,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={selected ? "card active" : "card"}>
      <img src={icon} alt="icon" />
      <span className="card-title">{title}</span>
      <span className="card-description">{description}</span>
    </div>
  );
};

export default Card;

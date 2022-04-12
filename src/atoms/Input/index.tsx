import "./styles.css";

interface IInput {
  prefix?: string;
  optional?: boolean;
}

const Input: React.FC<IInput> = ({ prefix, optional }) => {
  return (
    <div className="input">
      <label htmlFor="input">
        Full Name{" "}
        {optional && <span className="optional-text">(optional)</span>}
      </label>
      <div className="input-container">
        {prefix && <span className="prefix">{prefix}</span>}
        <input type="text" name="text-input" />
      </div>
    </div>
  );
};

export default Input;

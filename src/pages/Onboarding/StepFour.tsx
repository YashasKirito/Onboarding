import tick from "../../assets/icons/tick.png";
import Button from "../../atoms/Button";

interface IStepFour {
  resetFlow: () => void;
}

const StepFour: React.FC<IStepFour> = ({ resetFlow }) => {
  return (
    <div className="step-one">
      <img src={tick} />
      <h1>Congratulations, Eren!</h1>
      <span className="sub-text">
        You have completed the onboarding, you can start using Eden!
      </span>

      <div className="form-container">
        <Button onClick={resetFlow}>Launch Eden</Button>
      </div>
    </div>
  );
};

export default StepFour;

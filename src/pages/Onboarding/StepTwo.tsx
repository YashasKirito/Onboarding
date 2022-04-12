import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

interface IStepTwo {
  nextStep: () => void;
}

const StepTwo: React.FC<IStepTwo> = ({ nextStep }) => {
  return (
    <div className="step-one">
      <h1>Let's set up a home for all your work</h1>
      <span className="sub-text">
        You can always create another workspace later.
      </span>

      <div className="form-container">
        <Input label="Workspace Name" />
        <Input optional prefix="www.eden.com/" label="Workspace URL" />
        <Button onClick={nextStep}>Create Workspace</Button>
      </div>
    </div>
  );
};

export default StepTwo;

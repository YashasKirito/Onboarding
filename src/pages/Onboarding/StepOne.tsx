import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

interface IStepOne {
  nextStep: () => void;
}

const StepOne: React.FC<IStepOne> = ({ nextStep }) => {
  return (
    <div className="step-one">
      <h1>Welcome! First things first...</h1>
      <span className="sub-text">You can always change them later.</span>

      <div className="form-container">
        <Input label="Full Name" />
        <Input label="Display Name" />
        <Button onClick={nextStep}>Create Workspace</Button>
      </div>
    </div>
  );
};

export default StepOne;

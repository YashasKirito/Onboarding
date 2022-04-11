import "./styles.css";

interface ISteps {
  content: React.ReactNode;
}

interface IStepIndicator {
  steps: ISteps[];
  currentStep: number;
}

const StepIndicator: React.FC<IStepIndicator> = ({ steps, currentStep }) => {
  return (
    <>
      <section className="steps">
        {steps.map((_, index) => (
          <div
            key={index + 1}
            className={currentStep >= index ? "step active" : "step inactive"}
          >
            {index + 1}
          </div>
        ))}
      </section>
      <section className="step-content">{steps[currentStep].content}</section>
    </>
  );
};

export default StepIndicator;

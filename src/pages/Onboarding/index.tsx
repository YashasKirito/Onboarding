import { useState } from "react";
import StepIndicator from "../../organisms/StepIndicator";

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      content: <h1>Hello1</h1>,
    },
    {
      content: <h1>Hello2</h1>,
    },
    {
      content: <h1>Hello3</h1>,
    },
    {
      content: <h1>Hello4</h1>,
    },
  ];

  return (
    <>
      <h1>Onboarding</h1>
      <StepIndicator currentStep={currentStep} steps={steps} />
      <button onClick={() => setCurrentStep(currentStep + 1)}>next</button>
    </>
  );
};

export default Onboarding;

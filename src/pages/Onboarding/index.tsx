import { useState } from "react";
import StepIndicator from "../../organisms/StepIndicator";
import logo from "../../assets/icons/logo.png";
import StepOne from "./StepOne";

import "./styles.css";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // we just add more steps to this array if there are more steps in the future :)
  const steps = [
    {
      content: <StepOne nextStep={nextStep} />,
    },
    {
      content: <StepTwo nextStep={nextStep} />,
    },
    {
      content: <StepThree nextStep={nextStep} />,
    },
    {
      content: <StepFour resetFlow={() => setCurrentStep(0)} />,
    },
  ];

  return (
    <>
      <div className="logo">
        <img src={logo} alt="eden" />
        <h2>Eden</h2>
      </div>
      <StepIndicator currentStep={currentStep} steps={steps} />
    </>
  );
};

export default Onboarding;

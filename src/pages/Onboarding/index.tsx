import { useState } from "react";
import StepIndicator from "../../organisms/StepIndicator";
import logo from "../../assets/icons/logo.png";
import StepOne from "./StepOne";

import "./styles.css";
import StepTwo from "./StepTwo";

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const steps = [
    {
      content: <StepOne nextStep={nextStep} />,
    },
    {
      content: <StepTwo nextStep={nextStep} />,
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
      <div className="logo">
        <img src={logo} alt="eden" />
        <h2>Eden</h2>
      </div>
      <StepIndicator currentStep={currentStep} steps={steps} />
    </>
  );
};

export default Onboarding;

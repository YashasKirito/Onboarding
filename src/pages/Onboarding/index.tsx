import { useState } from "react";
import StepIndicator from "../../organisms/StepIndicator";
import logo from "../../assets/icons/logo.png";
import Input from "../../atoms/Input";

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      content: <Input optional prefix="www.eden.com/" />,
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
      <div className="logo">
        <img src={logo} alt="eden" />
        <h2>Eden</h2>
      </div>
      <StepIndicator currentStep={currentStep} steps={steps} />
    </>
  );
};

export default Onboarding;

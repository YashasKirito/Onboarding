import { useState } from "react";
import StepIndicator from "../../organisms/StepIndicator";
import logo from "../../assets/icons/logo.png";
import user from "../../assets/icons/user.svg";
import Card from "../../atoms/Card";

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      content: (
        <Card
          icon={user}
          title="For Myself"
          description="Write better. Think more clearly. Stay organized."
        />
      ),
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

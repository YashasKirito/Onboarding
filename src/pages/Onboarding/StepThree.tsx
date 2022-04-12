import { useState } from "react";
import Button from "../../atoms/Button";
import Card from "../../atoms/Card";

import user from "../../assets/icons/user.svg";
import users from "../../assets/icons/users.svg";
import usersSelected from "../../assets/icons/users-selected.svg";
import userSelected from "../../assets/icons/user-selected.svg";

interface IStepThree {
  nextStep: () => void;
}

const StepThree: React.FC<IStepThree> = ({ nextStep }) => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="step-one">
      <h1>How are you planning to use Eden?</h1>
      <span className="sub-text">
        We'll streamline your setup experience accordingly.
      </span>

      <div className="form-container">
        <div className="flex-row gap-2 flex-justify-center">
          <Card
            title="For myself"
            description="Write better, Think more clearly. Stay organized."
            icon={selected === 1 ? userSelected : user}
            selected={selected === 1}
            onClick={() => setSelected(1)}
          />
          <Card
            title="With my team"
            description="Wikis, docs, tasks & projects, all in one place."
            icon={selected === 2 ? usersSelected : users}
            selected={selected === 2}
            onClick={() => setSelected(2)}
          />
        </div>
        <Button onClick={nextStep}>Create Workspace</Button>
      </div>
    </div>
  );
};

export default StepThree;

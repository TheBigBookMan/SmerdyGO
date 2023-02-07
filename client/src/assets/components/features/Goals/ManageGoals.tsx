import ListGoals from "./ListGoals";
import SubGoals from "./SubGoals";
import { useState } from "react";

const ManageGoals = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <ListGoals
        selectedGoal={selectedGoal}
        setSelectedGoal={setSelectedGoal}
      />
      <SubGoals selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal} />
    </div>
  );
};

export default ManageGoals;

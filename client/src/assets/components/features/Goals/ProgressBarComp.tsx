import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";

// todo potentially add in like a timeline thing for each subgoal with the title and that could probably be the area where the user can change the orderof them--- would just be an algorithm that changes the index of thearray

//!!!!! FIX ANY
const ProgressBarComp = ({
  selectedGoal,
  subGoalList,
  updatedGoalCompletedAmount,
}: any) => {
  const goalAmount = selectedGoal?.amount;
  const goalToCompleteAmount = selectedGoal?.amountCompleted;
  const updatedAmount =
    updatedGoalCompletedAmount?.completeSubGoal.amountCompleted;
  const [percentGoalAmountCompleted, setPercentGoalAmountCompleted] =
    useState<string>();

  useEffect(() => {
    if (goalToCompleteAmount) {
      const percentCompleted = (goalToCompleteAmount / goalAmount) * 100;
      const twoDecimal = percentCompleted.toFixed(2);
      const stringPercent = twoDecimal.toString();
      setPercentGoalAmountCompleted(stringPercent);
    }
    if (
      typeof updatedAmount === "number" &&
      updatedAmount !== goalToCompleteAmount
    ) {
      const percentCompleted = (updatedAmount / goalAmount) * 100;
      const twoDecimal = percentCompleted.toFixed(2);
      const stringPercent = twoDecimal.toString();
      setPercentGoalAmountCompleted(stringPercent);
    }
  }, [updatedGoalCompletedAmount, selectedGoal]);

  return (
    <div>
      <h1 className="font-bold">progress</h1>
      <p></p>
      <ProgressBar
        completed={percentGoalAmountCompleted}
        bgColor="#5deea5"
        height="20px"
        labelColor="#030f06"
        transitionDuration="2s"
        animateOnRender
        maxCompleted={100}
      />
    </div>
  );
};

export default ProgressBarComp;

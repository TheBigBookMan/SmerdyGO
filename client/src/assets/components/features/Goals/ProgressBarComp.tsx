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
  const [percentGoalAmountCompleted, setPercentGoalAmountCompleted] =
    useState<string>();
  //todo set the amount completed based off the selected goal amount (generated from querying database) and then have a usestate data change call for the updatedGoalCompletedAmount coming in from updating the subgoal completion
  //todo need a function that calculates the percent of the progress done by the goal amount
  console.log(goalAmount);
  console.log(goalToCompleteAmount);
  console.log(selectedGoal);
  console.log(updatedGoalCompletedAmount);

  useEffect(() => {
    if (goalToCompleteAmount) {
      const percentCompleted = (goalToCompleteAmount / goalAmount) * 100;
      console.log(percentCompleted);
      const stringPercent = percentCompleted.toString();
      setPercentGoalAmountCompleted(stringPercent);
    }
  }, [updatedGoalCompletedAmount, selectedGoal]);

  console.log(percentGoalAmountCompleted);

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

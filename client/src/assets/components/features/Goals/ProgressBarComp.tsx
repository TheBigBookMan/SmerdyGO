import ProgressBar from "@ramonak/react-progress-bar";

// todo potentially add in like a timeline thing for each subgoal with the title and that could probably be the area where the user can change the orderof them--- would just be an algorithm that changes the index of thearray

//!!!!! FIX ANY
const ProgressBarComp = ({ goalAmount, subGoalList }: any) => {
  //todo need a function that calculates the percent of the progress done by the goal amount
  console.log(goalAmount);
  console.log(subGoalList);
  return (
    <div>
      <h1 className="font-bold">progress</h1>
      <p></p>
      <ProgressBar
        completed={85}
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

import ProgressBar from "@ramonak/react-progress-bar";

// todo potentially add in like a timeline thing for each subgoal with the title and that could probably be the area where the user can change the orderof them--- would just be an algorithm that changes the index of thearray

const ProgressBarComp = () => {
  return (
    <div>
      <h1 className="font-bold">progress</h1>
      <p></p>
      <ProgressBar
        completed={25}
        bgColor="#5deea5"
        height=""
        labelColor="#030f06"
        transitionDuration="2"
        animateOnRender
        maxCompleted={100}
      />
    </div>
  );
};

export default ProgressBarComp;

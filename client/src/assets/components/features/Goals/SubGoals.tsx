import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_AMOUNT_SUBGOAL } from "../../../graphql/queries";

// TODO add in the nicer scrollbar for the subgoals section X

//TODO can make each subgoal have a number that indicates where it is in the goal path and then when they reload the page after creating it or have a "refresh" button then the query call can do an ordered return based on that number in the list

//TODO for goal can have each list item show the stat,s and then user clicks on it and a modal comes up with the ability to edit the goal--- just makes it bit easier than having the edit and show on the small item

// ! FIX ANY
const SubGoals = ({ selectedGoal }: any) => {
  const [doesWantSteps, setDoesWantSteps] = useState<boolean>(true);
  const [numOfSubgoals, setNumOfSubgoals] = useState<string>("");
  const [subGoalList, setSubGoalList] = useState<SubGoal[]>([]);
  const [addSubGoalAmount, { data: goalSubGoals, loading, error }] =
    useMutation(ADD_AMOUNT_SUBGOAL);

  useEffect(() => {
    const listSubGoals = selectedGoal?.subGoals;
    if (listSubGoals) {
      setSubGoalList([...listSubGoals]);
    }
  }, [selectedGoal]);

  useEffect(() => {
    const returnedSubGoals = goalSubGoals?.addAmountSubGoal;
    if (returnedSubGoals) {
      setSubGoalList([...returnedSubGoals.subGoals]);
    }
  }, [goalSubGoals]);

  const checkSteps = async (e: MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    if (parseInt(numOfSubgoals) >= 0) {
      const goalId = selectedGoal.id;
      const numSubGoals = parseInt(numOfSubgoals);
      await addSubGoalAmount({
        variables: { goalId, numSubGoals },
      });
    } else {
      alert("You need to enter steps number");
    }
  };

  const changeStepsAmount = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setNumOfSubgoals("");
    } else if (!parseInt(e.target.value)) {
      alert("Input needs to be a number");
    } else {
      setNumOfSubgoals(e.target.value);
    }
  };

  return (
    <div className="w-full h-full p-1 flex flex-col">
      <div className="flex gap-3">
        <h1 className="font-bold">subgoals- </h1>
        {selectedGoal && (
          <>
            <h1 className="font-bold text-emerald-500">
              {selectedGoal.title}:{" "}
            </h1>
            {selectedGoal.measurement === "$" ? (
              <div className="flex">
                <h1 className="mr-1">goal amount: </h1>

                <p>{selectedGoal.measurement}</p>
                <p>{selectedGoal.amount}</p>
              </div>
            ) : (
              <div className="flex gap-1">
                <h1 className="">goal amount: </h1>
                <p>{selectedGoal.amount}</p>
                <p>{selectedGoal.measurement}</p>
              </div>
            )}
          </>
        )}
      </div>
      <p>
        create some subgoals for your main goal, which can be used as stepping
        stones in your journey. rewarding yourself for these stepping stones can
        be great motivator to keep pushing to the end-goal...
      </p>
      <form className="flex flex-col">
        <div className="flex gap-2 items-center">
          <h1 className="font-bold">how many steps do you want?</h1>
          <input
            value={numOfSubgoals}
            onChange={(e) => changeStepsAmount(e)}
            className="bg-emerald-100 rounded-lg max-w-[260px] pl-1 border-2"
            type="text"
            name="numSubgoals"
            placeholder="num of subgoals..."
          />
          <TiTick
            onClick={(e) => checkSteps(e)}
            className="mt-1 font-bold cursor-pointer border-2 rounded-xl w-[30px] h-[30px] hover:bg-emerald-300 bg-emerald-200 hover:border-emerald-200 transition-all"
          />
        </div>
      </form>
      {subGoalList.length > 0 ? (
        <>
          <ul className="flex gap-2 h-4/6 w-full max-w-5xl overflow-x-auto">
            {subGoalList.map((goal, idx) => (
              <li
                key={goal.subgoal + idx}
                className="flex flex-col border-2 shadow-lg border-emerald-200 rounded-xl h-full min-w-[200px] max-w-[200px] p-1 hover:bg-gray-100 hover:shadow-xl cursor-pointer"
              >
                <div className="flex gap-1 justify-end">
                  <h1 className="font-bold text-emerald-500">subgoal</h1>
                  <p className="font-bold text-emerald-500">{idx + 1}</p>
                </div>
                <div className="flex gap-1">
                  <h1 className="font-bold text-emerald-500">step:</h1>
                  <p>{selectedGoal.measurement}</p>
                  <p>{goal.subgoal}</p>
                </div>
                <div className="flex gap-1">
                  <h1 className="font-bold text-emerald-500">date done:</h1>
                  <p className="">{goal.dateToComplete}</p>
                </div>
                <div className="flex flex-col  overflow-y-auto">
                  <h1 className="font-bold text-emerald-500">description:</h1>
                  <p className="">{goal.description}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold text-emerald-500">reward:</h1>
                  <p className="">{goal.reward}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col w-full h-2/6">
            <p>
              This could be some sort of progress bar with like points of
              accomplishment, think like a small graphic and a progress bar and
              sectionms for milestones, with the amount done and the reward had,
              just a good graphic to show the progress, maybe allow user to have
              a photo at the beginning (losing weight could be like a fat photo)
            </p>
          </div>
        </>
      ) : (
        <h1 className="font-bold">
          enter a subgoal step counter to view the subgoals creator
        </h1>
      )}
    </div>
  );
};

export default SubGoals;

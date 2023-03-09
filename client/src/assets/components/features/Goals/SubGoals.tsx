import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { TbPlaylistAdd } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { AiOutlineEdit } from "react-icons/ai";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_SUB_GOAL,
  GET_SUB_GOALS,
  GET_SUB_GOAL,
  SUB_GOAL_EDIT,
} from "../../../graphql/queries";

// TODO add in the nicer scrollbar for the subgoals section X

// TODO edit button opens up the other component in front to edit the goal

// TODO the add goal button creates new goal component on screen, similar to edit but just with empty spaces

// ! FIX ANY
const SubGoals = ({ selectedGoal }: any) => {
  const goalId = selectedGoal?.id;
  const [enableEditMode, setEnableEditMode] = useState<boolean>(true);
  const [subGoalList, setSubGoalList] = useState<SubGoal[]>([]);
  const { data: databaseSubGoals, loading } = useQuery(GET_SUB_GOALS, {
    variables: { goalId },
  });
  const [addSubGoal, { data: newSubGoal, loading: newSubGoalLoading }] =
    useMutation(ADD_SUB_GOAL);

  useEffect(() => {
    const listSubGoals = databaseSubGoals?.getSubGoals;
    if (listSubGoals) {
      setSubGoalList([...listSubGoals]);
    }
  }, [selectedGoal, newSubGoal, databaseSubGoals]);
  console.log(subGoalList);

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
      <div className="flex gap-2 items-center">
        <h1 className="font-bold">add new subgoal</h1>
        <TbPlaylistAdd className="font-bold cursor-pointer border-2 rounded-xl w-[30px] h-[30px] hover:bg-emerald-300 bg-emerald-200 hover:border-emerald-200 transition-all" />
      </div>

      {subGoalList.length === 0 ? (
        <h1 className="font-bold">
          click above to add new subgoals and start your journey to reaching
          your potential...
        </h1>
      ) : (
        <div className="flex flex-col gap-2 w-full">
          <ul className="flex gap-1 mt-1 overflow-x-auto max-w-[720px]">
            {subGoalList.map((goal, idx) => (
              <li
                key={`${goal}${idx}`}
                className="flex  flex-col border-2 rounded-xl h-[240px] w-[200px] overflow-y-auto"
              >
                {goal.editMode ? (
                  <div className="flex justify-between items-center p-1 border-b">
                    <input
                      type="text"
                      className="font-bold w-[120px] pl-1 bg-emerald-100 rounded-lg"
                      placeholder={goal.title ? goal.title : "title..."}
                    />
                    <TiTick className="font-bold cursor-pointer border-2 rounded-lg w-[25px] h-[25px] hover:bg-emerald-300 bg-emerald-200 hover:border-emerald-200 transition-all" />
                  </div>
                ) : (
                  <div className="flex justify-between items-center p-1 border-b">
                    <h1 className="font-bold">{goal.title}</h1>
                    <AiOutlineEdit className="font-bold cursor-pointer border-2 rounded-lg w-[25px] h-[25px] hover:bg-emerald-300 bg-emerald-200 hover:border-emerald-200 transition-all" />
                  </div>
                )}

                <div className="flex flex-col gap-1 p-1">
                  <div className="flex gap-1 items-center">
                    <h1 className="font-bold">goal amount:</h1>
                    {goal.editMode ? (
                      <input
                        type="text"
                        className="bg-emerald-100 pl-1 w-[70px] rounded-lg"
                        placeholder={`${
                          selectedGoal.measurement === "$"
                            ? `${selectedGoal.measurement}${goal.amount}`
                            : `${goal.amount}${selectedGoal.measurement}`
                        }`}
                      />
                    ) : (
                      <>
                        {selectedGoal.measurement === "$" ? (
                          <p>
                            {selectedGoal.measurement}
                            {goal.amount}
                          </p>
                        ) : (
                          <p>
                            {goal.amount}
                            {selectedGoal.measurement}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                  <div className="flex gap-1 items-center">
                    <h1 className="font-bold">fin-date:</h1>
                    {goal.editMode ? (
                      <input
                        type="text"
                        placeholder={goal.dateToComplete}
                        className="bg-emerald-100 pl-1 w-[90px] rounded-lg"
                      />
                    ) : (
                      <p>{goal.dateToComplete}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold">description:</h1>
                    {goal.editMode ? (
                      <textarea
                        placeholder={
                          goal.description
                            ? goal.description
                            : "add description..."
                        }
                        rows={3}
                        className="bg-emerald-100 p-1 rounded-lg"
                      ></textarea>
                    ) : (
                      <p>{goal.description}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold">reward:</h1>
                    {goal.editMode ? (
                      <input
                        type="text"
                        placeholder={
                          goal.reward ? goal.reward : "add reward..."
                        }
                        className="bg-emerald-100 pl-1 rounded-lg"
                      />
                    ) : (
                      <p>{goal.reward}</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p>
            potentially add in like a timeline thing for each subgoal with the
            title and that could probably be the area where the user can change
            the order of them--- would just be an algorithm that changes the
            index of the array
          </p>
        </div>
      )}
    </div>
  );
};

export default SubGoals;

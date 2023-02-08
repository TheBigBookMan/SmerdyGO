import ListGoals from "./ListGoals";
import SubGoals from "./SubGoals";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_GOALS } from "../../../graphql/queries";

const ManageGoals = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const { data: goalsList, loading } = useQuery(GET_GOALS);
  const [getList, setGetList] = useState<GoalForm[] | undefined>();

  useEffect(() => {
    const list = goalsList?.getGoals;
    if (list) {
      setGetList(list);
    }
  }, [goalsList]);

  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <ListGoals
        selectedGoal={selectedGoal}
        setSelectedGoal={setSelectedGoal}
        getList={getList}
      />
      <SubGoals selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal} />
    </div>
  );
};

export default ManageGoals;

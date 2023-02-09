const goalcategories = ["health", "skills", "finance", "academia"];

import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

//TODO add in the better looking slider

//! FIX ANY
const ListGoals = ({ selectedGoal, setSelectedGoal, getList }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredList, setFilteredList] = useState<GoalForm[] | undefined>();

  useEffect(() => {
    if (getList) {
      const newList = categoryFilter(getList);
      setFilteredList(newList);
    }
  }, [selectedCategory]);

  // TODO create category filter function and set to state the filtered list
  const categoryFilter = (list: GoalForm[]) => {
    const filter = list.filter((item) => {
      if (item.category === selectedCategory) {
        return item;
      }
    });
    return filter;
  };

  return (
    <div className="border-b flex h-2/6 w-full p-1">
      <div className="flex flex-col h-full w-2/6 border-r">
        <div className="flex justify-between items-center pr-1">
          <h1 className="font-bold">goals</h1>
          <select
            defaultValue={"default"}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className=" rounded-lg w-[160px] pl-1 border-2"
            placeholder="category"
          >
            <option value={"default"} selected>
              choose category
            </option>
            {goalcategories.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>
        <ul className="flex flex-col gap-1 p-2 h-full w-full overflow-y-auto ">
          {!filteredList ? (
            <h1 className="text-emerald-500 font-bold">choose category...</h1>
          ) : (
            filteredList.map((goal) => (
              <li
                onClick={() => setSelectedGoal(goal)}
                key={goal.title}
                className={`flex justify-between items-center font-bold hover:text-emerald-400 cursor-pointer min-h-[40px] w-full border-2 border-gray-100 hover:bg-gray-100 rounded-xl px-1 group ${
                  selectedGoal === goal && "bg-gray-100 text-emerald-400"
                }`}
              >
                <h1>{goal.title}</h1>
                <IoIosArrowBack
                  className={`transition-all ${
                    selectedGoal === goal && "rotate-180"
                  }`}
                />
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="flex flex-col w-4/6 h-full p-1">
        <h1 className="font-bold">description</h1>

        {selectedGoal && (
          <p className="max-w-full">{selectedGoal.description}</p>
        )}
      </div>
    </div>
  );
};

export default ListGoals;

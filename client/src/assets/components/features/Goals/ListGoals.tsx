const hardcode = [
  "Save $27k",
  "run a 1/2 marathon",
  "read 25 books in a year",
  "learn Rust",
];

const goalcategories = ["health", "skills", "finance", "academia"];

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

//TODO add in the better looking slider

//TODO properly link up the category chosen to the goals displayed

const ListGoals = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  return (
    <div className="border-b flex h-2/6 w-full p-1">
      <div className="flex flex-col h-full w-2/6 border-r">
        <div className="flex justify-between items-center pr-1">
          <h1 className="font-bold">goals</h1>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className=" rounded-lg w-[160px] pl-1 border-2"
            placeholder="category"
          >
            {goalcategories.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>
        <ul className="flex flex-col gap-1 p-2 h-full w-full overflow-y-auto ">
          {hardcode.map((goal) => (
            <li
              onClick={() => setSelectedGoal(goal)}
              key={goal}
              className={`flex justify-between items-center font-bold hover:text-emerald-400 cursor-pointer min-h-[40px] w-full border-2 border-gray-100 hover:bg-gray-100 rounded-xl px-1 group ${
                selectedGoal === goal && "bg-gray-100 text-emerald-400"
              }`}
            >
              <h1>{goal}</h1>
              <IoIosArrowBack
                className={`transition-all ${
                  selectedGoal === goal && "rotate-180"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-4/6 h-full p-1">
        <h1 className="font-bold">description</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          tempora architecto nulla sit sequi quam, rem eaque perferendis quo
          sunt expedita dolorum at repellat soluta.
        </p>
      </div>
    </div>
  );
};

export default ListGoals;

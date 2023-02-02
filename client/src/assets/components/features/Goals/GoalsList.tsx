const hardcode = [
  "Save $27k",
  "run a 1/2 marathon",
  "read 25 books in a year",
  "learn Rust",
];

import { ChangeEvent, useState } from "react";

const GoalsList = () => {
  const [goalForm, setGoalForm] = useState<GoalForm>({
    title: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGoalForm({ ...goalForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-2/6 h-full">
      <h1 className="font-bold">goals- be objective... easier to track</h1>
      <form className="flex flex-col gap-1  p-2">
        <h1 className="font-bold">goal setting</h1>
        <input
          onChange={(e) => handleChange(e)}
          name="title"
          value={goalForm.title}
          type="text"
          className="bg-emerald-100 rounded-lg w-[260px] pl-1 border-2"
          placeholder="create goal..."
        />
      </form>
      <ul className="flex flex-col gap-2 p-2">
        {hardcode.map((goal) => (
          <li
            key={goal}
            className="font-bold hover:text-emerald-500 cursor-pointer"
          >
            {goal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsList;

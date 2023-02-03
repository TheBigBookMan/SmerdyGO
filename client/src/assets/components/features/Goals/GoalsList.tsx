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
    measurement: "",
    amount: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGoalForm({ ...goalForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(goalForm);
  };

  return (
    <div className="w-2/6 h-full">
      <h1 className="font-bold">goals- be objective... easier to track</h1>
      <form className="flex flex-col p-2">
        <h1 className="font-bold">goal setting</h1>
        <input
          onChange={(e) => handleChange(e)}
          name="title"
          value={goalForm.title}
          type="text"
          className="bg-emerald-100 rounded-lg max-w-[260px] pl-1 border-2"
          placeholder="create goal..."
        />
        <h1 className="font-bold">set measurement</h1>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="measurement"
          value={goalForm.measurement}
          placeholder="eg... km p/w, days p/w"
          className="bg-emerald-100 rounded-lg max-w-[260px] pl-1 border-2"
        />
        <h1 className="font-bold">goal amount</h1>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="amount"
          value={goalForm.amount}
          placeholder="set goal amount..."
          className="bg-emerald-100 rounded-lg max-w-[260px] pl-1 border-2"
        />
        <h1 className="font-bold">description</h1>
        <textarea
          onChange={(e) => handleChange(e)}
          name="description"
          placeholder="describe what you want"
          value={goalForm.description}
          className="pl-1 border-2 rounded-lg bg-emerald-100 "
          rows={3}
        ></textarea>
        <button
          onClick={onSubmit}
          className="mt-1 font-bold cursor-pointer border-2 rounded-xl w-[140px] h-[40px] hover:bg-emerald-300 bg-emerald-200 hover:border-emerald-200 transition-all"
        >
          add goal
        </button>
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

import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_GOAL } from "../../../graphql/queries";

const goalcategories = ["health", "skills", "finance", "academia"];

const CreateGoals = () => {
  const [addGoal, { loading, error }] = useMutation(ADD_GOAL);
  const [goalForm, setGoalForm] = useState<GoalForm>({
    title: "",
    description: "",
    measurement: "",
    amount: 0,
    category: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setGoalForm({ ...goalForm, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const amount = parseInt(goalForm.amount);
    if (
      goalForm.title.length === 0 ||
      goalForm.amount <= 0 ||
      goalForm.category === "choose category"
    ) {
      alert("Need to fill out goal title, amount and select category");
      return;
    }
    await addGoal({
      variables: { ...goalForm, amount },
    });
    setGoalForm({
      title: "",
      description: "",
      measurement: "",
      amount: 0,
      category: "",
    });
  };

  return (
    <div className="w-2/6 h-full border-r">
      <h1 className="font-bold">goals- be objective... easier to track</h1>
      <form className="flex flex-col p-2 gap-1">
        <p>
          create a goal here and set out a brief outline of what you want to
          achieve and the measurements for tracking. to the side you will be
          able to set sub-goals, which can be extremely useful in creating a
          step-by-step process to achieve the overall goal.
        </p>
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
          type="number"
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
          rows={5}
        ></textarea>
        <select
          defaultValue={"default"}
          value={goalForm.category}
          onChange={(e) => handleChange(e)}
          name="category"
          className=" rounded-lg max-w-[260px] pl-1 border-2"
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
        <button
          onClick={onSubmit}
          className="mt-1 font-bold cursor-pointer border-2 rounded-xl w-[140px] h-[40px] hover:bg-emerald-300 bg-emerald-200 hover:border-emerald-200 transition-all"
        >
          add goal
        </button>
      </form>
    </div>
  );
};

export default CreateGoals;

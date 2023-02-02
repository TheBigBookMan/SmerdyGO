//* Goals-- important to have the yearly (shredded, argentina, skills learnt)
//* have the daily, weekly, monthly and yearly goals
//* have like a checklist and maybe subset checklist or something

//? have the todo list components to increment the units of measure for each goal--- eg have goal of running 20km per week, then each todo completed will add on that amount of km run
import GoalsDescription from "./GoalsDescription";
import GoalsExtras from "./GoalsExtras";
import GoalsList from "./GoalsList";

const Goals = () => {
  return (
    <div className="flex border-2 h-full w-full p-2 text-sm">
      <GoalsList />
      <div className="flex flex-col gap-2">
        <GoalsDescription />
        <GoalsExtras />
      </div>
    </div>
  );
};

export default Goals;

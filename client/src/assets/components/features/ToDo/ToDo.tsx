//* Tasks -  App will store stuff like a task tracker- yearly, monthly, weekly, daily and can check them off PLUS have a checked off list-- different to goals as these are the tasks eg (shredded- gym, cardio: argentina- visa, save money: skills learnt- python, blockchain courses)
//TODO each todo can have the main title and then user choose if they want a small description with it as well or like a subnote
//TODO have like one main section and user can select daily, weekly etc

import Current from "./Current";
import Completed from "./Completed";

const ToDo = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center text-sm">
      <Current />
      <Completed />
    </div>
  );
};

export default ToDo;

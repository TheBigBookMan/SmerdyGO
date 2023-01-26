import { timeframes } from "../../../utils/todocode";
import { useState } from "react";

const Completed = () => {
  const [todoTimeframe, setTodoTimeframe] = useState<string>("daily");

  return (
    <div className="w-full h-2/6">
      <h1 className="flex justify-center">completed todos</h1>
      <div className="flex flex-col h-full w-full">
        <ul className="flex justify-end">
          {timeframes.map((time) => (
            <li
              onClick={() => setTodoTimeframe(time)}
              value={time}
              className={`border-2 border-gray-100 p-1 rounded-t-lg cursor-pointer hover:bg-emerald-200 transition-all ${
                todoTimeframe === time && "bg-emerald-200"
              }`}
            >
              {time}
            </li>
          ))}
        </ul>
        <div className="h-full w-full border-2 border-gray-100 rounded-lg flex">
          <div className="border-2 h-full w-3/6">
            <h1 className="font-bold">description</h1>
          </div>
          <div className="border-2 h-full w-3/6">
            <h1 className="font-bold">congrats on completing!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;

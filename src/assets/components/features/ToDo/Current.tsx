import { timeframes } from "../../../utils/todocode";
import { ChangeEvent, useState } from "react";

interface ToDo {
  title: string;
  description: string;
}

const Current = () => {
  const [todoTimeframe, setTodoTimeframe] = useState<string>("daily");
  const [enterTodo, setEnterTodo] = useState<ToDo>({
    title: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnterTodo({ ...enterTodo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(enterTodo);
  };

  return (
    <div className="w-full h-3/6">
      <h1 className="flex justify-center">todo list</h1>
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
          <div className="border-2 h-full w-3/6 flex flex-col">
            <div className="flex flex-col border-b h-2/6">
              <h1 className="font-bold">description</h1>
              <p className="text-sm overflow-y-scroll">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                voluptatem ea repellendus ut voluptatibus sequi! Officia
                expedita exercitationem eos natus.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-1">
              <h1 className="font-bold">enter todo</h1>
              <form className="flex flex-col gap-2">
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="title"
                  value={enterTodo.title}
                  placeholder="todo"
                  className="pl-1 border-2 rounded-lg bg-emerald-100"
                />
                <textarea
                  onChange={(e) => handleChange(e)}
                  name="description"
                  placeholder="description"
                  value={enterTodo.description}
                  className="pl-1 border-2 rounded-lg bg-emerald-100"
                  rows={5}
                />
                <button
                  onClick={onSubmit}
                  className="cursor-pointer border-2 rounded-xl w-[140px] h-[40px] hover:bg-emerald-300 bg-emerald-200 hover:border-emerald-200 transition-all"
                >
                  enter todo
                </button>
              </form>
            </div>
          </div>
          <div className="border-2 h-full w-3/6">
            <h1 className="font-bold">congrats on completing!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;

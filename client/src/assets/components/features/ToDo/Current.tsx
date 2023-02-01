import { timeframes } from "../../../utils/todocode";
import { ChangeEvent, useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { ADDTODO } from "../../../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";

const hardcode = [
  {
    title: "Go gym ",
    description: "Need to train back and bis",
    isCompleted: false,
  },
  {
    title: "Python",
    description:
      "Do the pytho ncourse and then try and do the automation course tha ti want to do as i really enjoy doing it and then maybe look at data dsicnende and then look at the more jobs etc",
    isCompleted: true,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Compsi",
    description: "NHarvard uni comp sci course",
    isCompleted: false,
  },
  {
    title: "Cook dinner",
    description: "chicke and veg",
    isCompleted: true,
  },
];

//TODO add in tick for the complete button

//TODO to get the list of todo items in relation to the logged in user will need to do a reolsver that is a findMany with a selection of the usersId---- this instead of using userId to then select all ids in their model
// https://www.youtube.com/watch?v=b4nxOv91vWI&t=379s

const Current = () => {
  const [todoTimeframe, setTodoTimeframe] = useState<string>("daily");
  const [enterTodo, setEnterTodo] = useState<ToDo>({
    title: "",
    description: "",
    timeframe: todoTimeframe,
  });
  const [addToDo, { data: addTodoData, loading }] = useMutation(ADDTODO);

  // TODO useEffect with the addTodoData for any change and then that will reload the useQuery load for all the todo list items

  useEffect(() => {
    setEnterTodo({ ...enterTodo, timeframe: todoTimeframe });
  }, [todoTimeframe]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnterTodo({ ...enterTodo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(enterTodo);
    await addToDo({ variables: { ...enterTodo } });
  };

  return (
    <div className="w-full h-3/6">
      <div className="flex flex-col h-full w-full">
        <div className="flex justify-end gap-8 items-center">
          <h1 className="flex justify-center">todo list</h1>
          <ul className="flex justify-end">
            {timeframes.map((time) => (
              <li
                key={time}
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
        </div>
        <div className="h-full w-full border-2 rounded-lg flex">
          <div className=" h-full w-2/6 flex flex-col">
            <div className="flex flex-col border-b h-2/6 p-1">
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
                  rows={3}
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
          <div className=" h-full w-4/6 pb-6">
            <h1 className="font-bold">todos</h1>
            <ul className="flex flex-col w-full h-full max-h-[280px] flex-wrap gap-4  pl-6 overflow-x-auto">
              {hardcode.map((todo) => (
                <>
                  {todo.isCompleted === false && (
                    <li
                      key={todo.title}
                      className="flex gap-2 justify-between w-[220px] max-h-[40px] overflow-y-auto items-center"
                    >
                      <h1 className="font-bold cursor-pointer hover:text-emerald-500">
                        {todo.title}
                      </h1>
                      <TiTick className="text-2xl text-emerald-400 hover:border-2 hover:bg-gray-100 hover:rounded-lg hover:shadow cursor-pointer" />
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;

import { timeframes } from "../../../utils/todocode";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../../../graphql/queries";
import { sortTimeframeLists } from "../../../hooks/sortTimeframeLists";
import { BiRefresh } from "react-icons/bi";

const hardcodegoals = [
  "gym 5 times a week",
  "run 3km",
  "get better at spanish",
  "train triceps",
];

const Completed = () => {
  const [selectTodo, setSelectTodo] = useState<ToDo>({
    id: "",
    title: "",
    description: "",
    isCompleted: true,
    dateAdded: "",
    dateCompleted: "",
    timeframe: "",
  });
  const [completedTodoList, setCompletedTodoList] = useState<
    ToDo[] | undefined
  >([]);
  const [todoTimeframe, setTodoTimeframe] = useState<string>("daily");
  const {
    data: completeTodos,
    loading: completeTodosLoading,
    refetch,
  } = useQuery(GET_TODOS, { variables: { completeOrNot: true } });

  useEffect(() => {
    const listCompleteTodos = completeTodos?.getTodos;
    if (listCompleteTodos) {
      const finalList = sortTimeframeLists(listCompleteTodos, todoTimeframe);
      setCompletedTodoList(finalList);
    }
  }, [completeTodos, todoTimeframe]);

  //TODO could have a selection that selects a goal and then you can press a button to then add that todo to that goal--- example--- your goal is to gym 5 times a week, and once you click the complete then you can select to add that gym completion to the goal of gym 5 times a week

  //TODO add in a unit of measurement for the goal as it will be important for things that may be quatity -- example-- save $300 of my goal of $3000 for the month

  return (
    <div className="w-full h-3/6 pb-1">
      <div className="flex flex-col h-full w-full">
        <div className="flex justify-end gap-8 items-center">
          <BiRefresh
            onClick={() => refetch({ completeOrNot: true })}
            className="text-3xl cursor-pointer border-emerald-200 hover:bg-emerald-200 hover:bg-emerald-200 border-solid border-2 rounded-xl transition-all hover:rotate-180"
          />
          <h1 className="flex justify-center">completed todos</h1>
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
          <div className="h-full w-3/6 p-1">
            <h1 className="font-bold">
              description-{" "}
              <span className="text-emerald-500">{selectTodo.title}</span>
            </h1>
            <p className="text-xs overflow-y-auto h-[60px]">
              {selectTodo.description}
            </p>
            <h1 className="font-bold">
              date created:{" "}
              <span className="text-emerald-500">{selectTodo.dateAdded}</span>
            </h1>
            <h1 className="font-bold">
              date completed:{" "}
              <span className="text-emerald-500">
                {selectTodo.dateCompleted}
              </span>
            </h1>
            <div className="flex flex-col gap-1 border-t">
              <h1 className="font-bold">
                update your goal by adding on the extra unit
              </h1>
              <form className="flex flex-col gap-1">
                <div className="flex gap-4 items-center">
                  <select className="h-[30px] bg-gray-100 rounded-xl pl-1">
                    {hardcodegoals.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                  <input
                    className="bg-gray-100 rounded-xl pl-2 h-[30px]"
                    placeholder="unit of measure"
                  />
                  <p className="text-emerald-500">completed 3/5</p>
                </div>
                <button className=" cursor-pointer border-2 rounded-xl w-[110px] h-[30px] hover:bg-emerald-300 bg-emerald-200 hover:border-emerald-200 transition-all">
                  update goal
                </button>
              </form>
              <button className=" cursor-pointer border-2 rounded-xl w-[140px] h-[40px] hover:bg-red-300 bg-red-200 hover:border-red-200 transition-all">
                delete todo
              </button>
            </div>
          </div>
          <div className=" h-full w-3/6">
            <h1 className="font-bold">congrats on completing!</h1>
            {!completedTodoList ? (
              <h1>Loading...</h1>
            ) : (
              <ul className="flex flex-col w-full h-full max-h-[260px] flex-wrap gap-4  pl-6 overflow-x-auto">
                {completedTodoList.map((todo) => (
                  <>
                    {todo.isCompleted === true && (
                      <li
                        key={todo.title}
                        className="flex gap-2 justify-between w-[220px] max-h-[40px] overflow-y-auto items-center"
                      >
                        <h1
                          onClick={() => setSelectTodo({ ...todo })}
                          className={`font-bold cursor-pointer hover:text-emerald-500 ${
                            selectTodo.title === todo.title &&
                            "text-emerald-500"
                          } `}
                        >
                          {todo.title}
                        </h1>
                      </li>
                    )}
                  </>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;

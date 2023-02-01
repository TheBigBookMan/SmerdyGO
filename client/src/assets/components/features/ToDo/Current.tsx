import { timeframes } from "../../../utils/todocode";
import { ChangeEvent, useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { ADD_TODO, GET_TODOS } from "../../../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";

const Current = () => {
  const [incompleteTodoList, setIncompleteTodoList] = useState<
    ToDo[] | undefined
  >([]);
  const [todoTimeframe, setTodoTimeframe] = useState<string>("daily");
  const [enterTodo, setEnterTodo] = useState<ToDoForm>({
    title: "",
    description: "",
    timeframe: todoTimeframe,
  });
  const [addToDo, { data: addTodoData, loading }] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: GET_TODOS, variables: { completeOrNot: false } }],
  });
  const { data: incompleteTodos, loading: incompleteTodosLoading } = useQuery(
    GET_TODOS,
    { variables: { completeOrNot: false } }
  );

  // ? Gets the list of todos from database and calls timeframe arranging function
  useEffect(() => {
    const listOfIncompleteTodos = incompleteTodos?.getTodos;
    if (listOfIncompleteTodos) {
      sortTimeframeLists(listOfIncompleteTodos);
    }
  }, [todoTimeframe, incompleteTodos]);

  //? Changes timeframe based on user
  useEffect(() => {
    setEnterTodo({ ...enterTodo, timeframe: todoTimeframe });
  }, [todoTimeframe]);

  //? Function that sorts the list based on timeframe
  const sortTimeframeLists = (list: ToDo[]) => {
    let sortedList;
    if (todoTimeframe === "daily") {
      sortedList = list.filter((todo) => todo.timeframe === "daily");
    } else if (todoTimeframe === "weekly") {
      sortedList = list.filter((todo) => todo.timeframe === "weekly");
    } else if (todoTimeframe === "monthly") {
      sortedList = list.filter((todo) => todo.timeframe === "monthly");
    } else if (todoTimeframe === "yearly") {
      sortedList = list.filter((todo) => todo.timeframe === "yearly");
    } else if (todoTimeframe === "life") {
      sortedList = list.filter((todo) => todo.timeframe === "life");
    }

    setIncompleteTodoList(sortedList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnterTodo({ ...enterTodo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await addToDo({ variables: { ...enterTodo } });
    setEnterTodo({ ...enterTodo, title: "", description: "" });
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
              <h1 className="font-bold">
                description- <span>go gym</span>
              </h1>
              <p className="text-xs overflow-y-scroll">
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
                  className="pl-1 border-2 rounded-lg bg-emerald-100 "
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
            {!incompleteTodoList ? (
              <h1>Loading...</h1>
            ) : (
              <ul className="flex flex-col w-full h-full max-h-[280px] flex-wrap gap-4  pl-6 overflow-x-auto">
                {incompleteTodoList.map((todo) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;

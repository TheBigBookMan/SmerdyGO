import { timeframes } from "../../../utils/todocode";
import { ChangeEvent, useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { ADD_TODO, GET_TODOS, COMPLETE_TODO } from "../../../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { sortTimeframeLists } from "../../../hooks/sortTimeframeLists";

const Current = () => {
  const [selectTodo, setSelectTodo] = useState<ToDoForm>({
    title: "",
    description: "",
    timeframe: "",
  });
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
  const [completeTodo] = useMutation(COMPLETE_TODO, {
    refetchQueries: [{ query: GET_TODOS, variables: { completeOrNot: false } }],
  });

  // ? Gets the list of todos from database and calls timeframe arranging function
  useEffect(() => {
    const listOfIncompleteTodos = incompleteTodos?.getTodos;
    if (listOfIncompleteTodos) {
      const finalList = sortTimeframeLists(
        listOfIncompleteTodos,
        todoTimeframe
      );
      setIncompleteTodoList(finalList);
    }
  }, [todoTimeframe, incompleteTodos]);

  //? Changes timeframe based on user
  useEffect(() => {
    setEnterTodo({ ...enterTodo, timeframe: todoTimeframe });
  }, [todoTimeframe]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnterTodo({ ...enterTodo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await addToDo({ variables: { ...enterTodo } });
    setEnterTodo({ ...enterTodo, title: "", description: "" });
  };

  //TODO
  //TODOneed to create a update mutation to change from incomplete to completed and this will require a function in the resolver to get the current date and then store that as a string in the database
  //TODO

  //TODO can think of another button that does something and ut it next to the enter todo button

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
                description-{" "}
                <span className="text-emerald-500 ">{selectTodo.title}</span>
              </h1>
              <p className="text-xs overflow-y-auto">
                {selectTodo.description}
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
            <h1 className="font-bold">
              todos- click the tick to mark as complete
            </h1>
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
                        <h1
                          onClick={() => setSelectTodo({ ...todo })}
                          className={`font-bold cursor-pointer hover:text-emerald-500 ${
                            selectTodo.title === todo.title &&
                            "text-emerald-500"
                          } `}
                        >
                          {todo.title}
                        </h1>
                        <TiTick
                          onClick={() =>
                            completeTodo({ variables: { todoId: todo.id } })
                          }
                          className="text-2xl text-emerald-400 hover:border-2 hover:bg-gray-100 hover:rounded-lg hover:shadow cursor-pointer"
                        />
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

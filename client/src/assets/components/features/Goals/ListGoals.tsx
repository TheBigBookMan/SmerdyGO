const hardcode = [
  "Save $27k",
  "run a 1/2 marathon",
  "read 25 books in a year",
  "learn Rust",
  "Save $27k",
  "run a 1/2 marathon",
  "read 25 books in a year",
  "learn Rust",
  "Save $27k",
  "Save $27k",
  "run a 1/2 marathon",
  "Save $27k",
  "run a 1/2 marathon",
  "read 25 books in a year",
  "learn Rust",
  "Save $27k",
  "Save $27k",
  "run a 1/2 marathon",
  "Save $27k",
  "run a 1/2 marathon",
  "read 25 books in a year",
  "learn Rust",
  "Save $27k",
  "Save $27k",
  "run a 1/2 marathon",
];

const ListGoals = () => {
  return (
    <div className="border-b flex flex-col w-full h-3/6">
      <h1>goals</h1>
      <ul className="flex flex-col gap-1 p-2 h-full  w-full flex-wrap overflow-x-auto ">
        {hardcode.map((goal) => (
          <li
            key={goal}
            className="font-bold hover:text-emerald-500 cursor-pointer w-[250px]"
          >
            {goal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGoals;

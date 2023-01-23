import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Welcome = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex flex-col items-center gap-1 pt-1">
      <h1 className="text-xl">Welcome to SmerdyGO</h1>
      <form className="flex justify-between gap-1">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
          value={search}
          name="search"
          className="border-2 rounded-lg pl-2 border-emerald-200 w-[200px]"
        />
        <BsArrowRightShort className="cursor-pointer border-2 rounded-xl text-3xl w-[30px] hover:bg-emerald-300 bg-emerald-200 hover:border-emerald-200 transition-all" />
      </form>
    </div>
  );
};

export default Welcome;

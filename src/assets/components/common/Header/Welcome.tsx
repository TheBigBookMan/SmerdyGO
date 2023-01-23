import { useState } from "react";

const Welcome = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex flex-col items-center gap-6 pt-8">
      <h1 className="text-xl">Welcome to SmerdyGO</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
          value={search}
          name="search"
          className="border-2 rounded-lg pl-2 border-emerald-200"
        />
        <button
          type="submit"
          value="submit"
          className="border-2 rounded-xl w-[80px] hover:bg-emerald-200 hover:border-emerald-200 transition-all"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default Welcome;

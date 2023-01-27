import { hardcodeMenu } from "../utils/hardcodemenu";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 h-full items-center text-sm">
      <h1 className="p-4 font-bold border-b-2 w-5/6">
        Welcome to SmerdyGO, the place where you can organise all your bits and
        bobs, while keeping track of statistics from other applications. In the
        sidebar you can access the specific tab that you want to use. Below you
        can find a small description about each section.
      </h1>
      <ul className="flex flex-col gap-4 px-20">
        {hardcodeMenu.map((item) => (
          <li key={item.name} className="flex gap-2">
            <h1 className="font-bold">{item.name}- </h1>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

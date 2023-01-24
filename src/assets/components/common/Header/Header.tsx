import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

//TODO add in the logout button takes to the login page

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[35px] border-b-2 w-full bg-gray-100 px-2">
      <Link to="/">
        <BsArrowLeftShort className="text-3xl cursor-pointer border-emerald-200 hover:bg-emerald-200 hover:bg-emerald-200 border-solid border-2 rounded-xl transition-all" />
      </Link>
      <button className="text-sm cursor-pointer border-emerald-200 hover:bg-emerald-200 hover:bg-emerald-200 border-solid border-2 rounded-xl transition-all w-[60px] h-[30px]">
        logout
      </button>
    </div>
  );
};

export default Header;

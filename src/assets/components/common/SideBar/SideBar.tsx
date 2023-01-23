import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Widget from "./Widget";

const Header = () => {
  return (
    <div className="flex flex-col gap-2 w-[250px] h-screen bg-gray-100">
      <Welcome />
      <NavBar />
      <Widget />
    </div>
  );
};

export default Header;

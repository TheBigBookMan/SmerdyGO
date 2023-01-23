import NavBar from "./NavBar";
import Welcome from "./Welcome";

const Header = () => {
  return (
    <div className="flex flex-col gap-6 w-[250px]">
      <Welcome />
      <NavBar />
    </div>
  );
};

export default Header;

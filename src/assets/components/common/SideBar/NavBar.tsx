import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { hardcodeMenu } from "../../../utils/hardcodemenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Sidebar>
      <Menu className="overflow-y-scroll h-[500px]">
        {hardcodeMenu.map((item) => (
          <>
            {/* <MenuItem className="bg-green-100">{item.name}</MenuItem> */}
            {!item.sub ? (
              <Link to={`/${item.name.toLowerCase()}`}>
                <MenuItem className="text-sm">{item.name}</MenuItem>
              </Link>
            ) : (
              <SubMenu className="text-sm" label={item.name}>
                {item.subNames.map((subname) => (
                  <Link to={`/${subname.toLowerCase()}`}>
                    <MenuItem className="text-sm">{subname}</MenuItem>
                  </Link>
                ))}
              </SubMenu>
            )}
          </>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default NavBar;

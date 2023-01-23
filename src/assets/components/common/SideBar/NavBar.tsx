import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { hardcodeMenu } from "../../../utils/hardcodemenu";

const NavBar = () => {
  return (
    <Sidebar>
      <Menu className="overflow-y-scroll h-[500px]">
        {hardcodeMenu.map((item) => (
          <>
            {/* <MenuItem className="bg-green-100">{item.name}</MenuItem> */}
            {!item.sub ? (
              <MenuItem className="text-sm  ">{item.name}</MenuItem>
            ) : (
              <SubMenu className="text-sm " label={item.name}>
                {item.subNames.map((subname) => (
                  <MenuItem className="text-sm  ">{subname}</MenuItem>
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

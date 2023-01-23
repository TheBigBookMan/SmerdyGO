import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { hardcodeMenu } from "../../../utils/hardcodemenu";

const NavBar = () => {
  return (
    <Sidebar>
      <Menu>
        {hardcodeMenu.map((item) => (
          <>
            {/* <MenuItem className="bg-green-100">{item.name}</MenuItem> */}
            {!item.sub ? (
              <MenuItem className="bg-green-100">{item.name}</MenuItem>
            ) : (
              <SubMenu className="bg-green-100" label={item.name}>
                {item.subNames.map((subname) => (
                  <MenuItem className="bg-green-100">{subname}</MenuItem>
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

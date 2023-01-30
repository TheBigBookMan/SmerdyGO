import UseUserContext from "../context/UserContext";
import Header from "../components/common/Header/Header";
import SideBar from "../components/common/SideBar/SideBar";
import Pages from "./Pages";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";

const OpenScreen = () => {
  const { isLoggedIn } = UseUserContext();

  return (
    <div className="font-mono w-screen h-screen+">
      <>
        {isLoggedIn ? (
          <div className="flex">
            <SideBar />
            <div className="flex flex-col w-full">
              <Header />
              <Pages />
            </div>
          </div>
        ) : (
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        )}
      </>
    </div>
  );
};

export default OpenScreen;

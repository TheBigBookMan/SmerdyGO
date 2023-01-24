//? This is a kind of "store everything" type thing for myself only
//TODO frontend- maybe use some threejs or something for something cool, do want to make it look aesthetic as well
//TODO backend- graphql/apollo, mongodb, prisma- just to store todo things etc, might need to plan database architecture
//TODO might use NextJS as having a backend running fast would be super handy, should take that udemy course on to learn more
//TODO might set up a script so this deployed site opens every time i open up my laptop/at night before bed at specific time

//TODO many more automation things can put in to make it easier to use for daily stats and life

//TODO can add mini picturesin for things as well or logos if want- make customizable

//TODO use the nice colours i like- light yellow, light blue, light red etc
//? kinda like this screenshot - https://bradfrost.com/blog/post/slowly-falling-in-love-with-notion/

//TODO layout like Notion

//TODO side bar a slightly darker light yellow and main page a very light/white yellow- add buttons light blue and delete buttons light red

//TODO could put the ascend stuff in there as well as things to buy

//TODO could maybe add in a free chatGPT thing if its free though in the corner so can always ask stuff

//TODO keep in mind this will become something I can use and update forever so making it really good will payoff super well and would look elite on a resume

//TODO link up apple watch and do a heart graph with D3 or sleeping with whoop etc API

//!!!!! can literally get API for most things and just get the data in here once "connected/authorized" and then store it in database and then can just update end of everyday or something

import Header from "./assets/components/common/Header/Header";
import SideBar from "./assets/components/common/SideBar/SideBar";
import Pages from "./assets/pages/Pages";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  //? temporary isloggedin variable
  let isLoggedIn = true;

  return (
    <ProSidebarProvider>
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
    </ProSidebarProvider>
  );
}

export default App;

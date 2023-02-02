import Home from ".//Home";
import ToDo from "../components/features/ToDo/ToDo";
import Goals from "../components/features/Goals/Goals";
import Ideas from "../components/features/Ideas/Ideas";
import Calendar from "../components/features/Calendar/Calendar";
import Networks from "../components/features/Networking/Networks";
import Gym from "../components/features/Health/Gym/Gym";
import Nutrition from "../components/features/Health/Nutrition/Nutrition";
import Cooking from "../components/features/Health/Cooking/Cooking";
import Running from "../components/features/Health/Running/Running";
import Code from "../components/features/Skills/Code/Code";
import Music from "../components/features/Skills/Music/Music";
import Reading from "../components/features/Skills/Reading/Reading";
import Budget from "../components/features/Finance/Budget/Budget";
import Purchases from "../components/features/Finance/Purchases/Purchases";
import Crypto from "../components/features/Investments/Crypto/Crypto";
import Stocks from "../components/features/Investments/Stocks/Stocks";
import Other from "../components/features/Investments/Other/Other";
import APIs from "../components/features/APIs/API";
import Stoic from "../components/features/Stoic/Stoic";
import Widgets from "../components/features/Widgets/Widgets";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/networks" element={<Networks />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/running" element={<Running />} />
        <Route path="/code" element={<Code />} />
        <Route path="/music" element={<Music />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/other" element={<Other />} />
        <Route path="/apis" element={<APIs />} />
        <Route path="/stoic" element={<Stoic />} />
        <Route path="/widgets" element={<Widgets />} />
      </Routes>
    </div>
  );
};

export default Pages;

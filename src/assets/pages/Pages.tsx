import Home from ".//Home";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Pages;

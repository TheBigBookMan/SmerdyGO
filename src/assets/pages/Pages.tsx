import Home from ".//Home";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Pages;

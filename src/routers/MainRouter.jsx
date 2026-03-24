import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
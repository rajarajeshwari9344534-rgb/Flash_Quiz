import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import CourseDetail from "../components/Course/CourseDetail.jsx";
import History from "../components/History/History.jsx";
import Quiz from "../components/Quiz/Quiz.jsx";
import AddCourse from "../components/Course/AddCourse.jsx";
import EditCourse from "../components/Course/EditCourse.jsx";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="course/:id" element={<CourseDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      
        <Route path="history" element={<History/>} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/edit-course/:id" element={<EditCourse />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
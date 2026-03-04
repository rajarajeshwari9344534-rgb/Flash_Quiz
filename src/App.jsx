import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Quiz from "./pages/Quiz";
import History from "./pages/History";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/quiz/:topic" element={<Quiz />} />
        <Route path="/history" element={<History />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
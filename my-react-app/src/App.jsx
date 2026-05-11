// import StudentCard from "./components/StudentCard";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import StudentScoreCard from "./components/StudentScoreCard";
// import NoteTaker from "./components/NoteTaker";
// import LoginCard from "./components/LoginCard";
// import { useState } from "react";
// import SearchBar from "./components/Project/SearchBar";
// import StudentList from "./components/Project/StudentList";

// import RegisterForm from "./components/Forms/RegisterForm";
// import Timer from "./components/ActivityTracker/Timer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects/" element={<Projects />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails/>}></Route>
        <Route path="*" element={<h2>Page not Found!</h2>}></Route>
      </Routes>
    </>
  );
}

export default App;

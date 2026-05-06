// import StudentCard from "./components/StudentCard";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import StudentScoreCard from "./components/StudentScoreCard";
// import NoteTaker from "./components/NoteTaker";
// import LoginCard from "./components/LoginCard";
import CourseList from "./components/Courses/CourseList";
import { useState } from "react";

const Courses = [
  {
    id: 1,
    name: "CMP123",
    credits : 12,
    isElective : true,
  },
  {
    id: 2,
    name: "CMP134",
    credits : 13,
    isElective : false,
  },
  {
    id: 3,
    name: "MMP123",
    credits : 2,
    isElective : true,
  },
  {
    id: 4,
    name: "MMP199",
    credits : 6,
    isElective : true,
  },
  {
    id: 5,
    name: "CPP123",
    credits : 32,
    isElective : true,
  }
]

function App(){
  // -----------------Bad practice-----------------
  // -------never modify the source data-----------
  // const [courses, setCourses] = useState(Courses)
  // const [isFiltered, setIsFiltered] = useState(false)
  // const filtered = courses.filter((c) => c.isElective)
  // const handleShowFilter = () => {
  //   setIsFiltered(prev => !prev)
  //   setCourses(isFiltered ? Courses : filtered)
  // }
  // return(
  //   <>
  //   <CourseList courses={courses}/>
  //   <button onClick={handleShowFilter}>{isFiltered ? "Show All" : "Show Electives"}</button>
  //   </>
  // )
  const [isFiltered, setIsFiltered] = useState(false)
  const displayCourses = isFiltered ? Courses.filter((c) => c.isElective === true) : Courses
  return (
    <>
    <CourseList courses={displayCourses}/>
    <button onClick={()=> setIsFiltered(prev => !prev)}>{isFiltered ? "Show All" : "Show Elective"}</button>
    </>
  )
}

export default App;
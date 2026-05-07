// import StudentCard from "./components/StudentCard";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import StudentScoreCard from "./components/StudentScoreCard";
// import NoteTaker from "./components/NoteTaker";
// import LoginCard from "./components/LoginCard";

import { useState } from "react";
import SearchBar from "./components/Project/SearchBar";
import StudentList from "./components/Project/StudentList";

function App(){
  const [input, setInput] = useState("");
  return(
    <>
      <SearchBar filter={input} setFilter={setInput}/>
      <StudentList filter={input}/>
    </>
  )
}

export default App;
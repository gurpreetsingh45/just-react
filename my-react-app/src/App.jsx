import StudentCard from "./components/StudentCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(){
  return(
    <>
    <Navbar name="Claude ai" title="100x Ai School"/>
    <StudentCard name="Grok" course="AIP343" language="TS" gpa={3.5}/>
    <StudentCard name="Chatgpt" course="AIP345" language="python" gpa={2.6}/>
    <StudentCard name="Copilot" course="AIP344" language="R" />
    <Footer school="AI School" year={2021}/>
    </>
  )
}

export default App;
import StudentCard from "./components/StudentCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StudentScoreCard from "./components/StudentScoreCard";
function App(){
  return(
    <>
    <Navbar name="Claude ai" title="100x Ai School"/>
    <StudentCard name="Claude" course="AIP234" language="Typescript"/>
    <StudentCard name="Grok" course="AIP254" language="Javascript"/>
    <StudentScoreCard name="Claude"></StudentScoreCard>
    <StudentScoreCard name="Grok" initialScore={20}></StudentScoreCard>
    <Footer school="AI School" year={2021}/>
    </>
  )
}

export default App;
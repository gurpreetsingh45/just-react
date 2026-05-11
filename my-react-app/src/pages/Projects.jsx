import { useNavigate } from "react-router-dom";
const ProjectData = [
    {
        id: 1,
        name: "taskify",
    },
    {
        id: 2,
        name: "helloWorld!",
    },
    {
        id: 3,
        name: "Ai ChatBot",
    },
]


function Projects(){
    const navigate = useNavigate();
    return(
        ProjectData.map((p) => <p to={`/projects/${p.id}`} onClick={() => navigate(`/projects/${p.id}`)} >{p.name}</p>)
    )
}

export default Projects;
import { useParams } from "react-router-dom";

function ProjectDetails(){
    const {id} = useParams();
    return(
        <p>Showing product #{id}</p>
    )
}

export default ProjectDetails;
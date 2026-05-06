function StudentCard({name, course, language, gpa = 'N/A'}){
    return(
        <div style={{background : 'grey', display : "flex", flexDirection : 'column', width : 'fit-content', alignItems : 'center', margin : '2em', padding : '2em', borderRadius : "2em"}}>
            <h2>{name}</h2>
            <p>Course: {course}</p>
            <p>Favourite Language: {language}</p>
            <p>Gpa: {gpa}</p>
        </div>
    )
}

export default StudentCard;
function CourseCard({name, credits, isElective = false}){

    return (
        <div>
        <p>{name}</p>
        <p>{credits}</p>
        {isElective && <p>⭐ Elective</p>}
        </div>
    )
}

export default CourseCard;
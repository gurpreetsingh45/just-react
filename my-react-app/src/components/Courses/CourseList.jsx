import CourseCard from "./CourseCard";

function CourseList({courses}){
    return (
        <>
        {courses.map((c) => <CourseCard key={c.id} name={c.name} credits={c.credits} isElective={c.isElective}/>)}
        </>
    )
}

export default CourseList;
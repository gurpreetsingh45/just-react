import { useEffect, useState } from "react";
import StudentCard from "./p-StudentCard";
function StudentList({filter}){
    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)
    useEffect(()=>{
        async function fetchStudents() {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json()
                setStudents(data);
            } catch(err){
                console.log(err);
                setError(true)
            } finally{
                setIsLoading(false);
            }
        }
        fetchStudents()
    }, [])
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>
    const displayStudents = filter ? students.filter((s) => s.name.toLowerCase().includes(filter.toLowerCase())) : students;
    return(
        <>
        <p>Total Students: {displayStudents.length}</p>
        {displayStudents.map((s) => <StudentCard key={s.id} {...s}/>)}
        </>
    )
}

export default StudentList;
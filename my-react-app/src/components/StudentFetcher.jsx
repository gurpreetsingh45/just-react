import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function StudentFetcher({initIsLoading}) {
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(initIsLoading);
    const [error, setError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUser(data);
      }catch(err){
        setError(true)
        console.error(err);
      } finally{
        setIsLoading(prev => !prev)
      }
    }
    fetchData();
  }, [])
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Something went wrong</p>
  console.log(user[0]);
  return (
    <>
    <p>Total Users : {user.length}</p>
    <ul>{user.map((u) => <UserCard key={u.id} {...u} />)}</ul>
    </>
  );
}

export default StudentFetcher;

import { useState } from "react";

function LoginCard({isLoading}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if(isLoading) return <p>Loading...</p>
    return(
        <>
        <p>{isLoggedIn ? "Welcome, Seneca Student! 👋" : "Please log in"}</p>
        <button onClick={() => setIsLoggedIn(prev => !prev)}>{isLoggedIn ? "log out" : "Log in"}</button>
        {isLoggedIn && <p>🔔 You have 3 notifications</p>}
        </>
    )
}

export default LoginCard;
function StudentCard({name, email, address}){
    return (
        <>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>City: {address.city}</p>
        </>
    )
}

export default StudentCard;
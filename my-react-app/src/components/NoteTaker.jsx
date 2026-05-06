import { useState } from "react";

function NoteTaker(){
    const [note, setNote] = useState("");
    const [notes, addNote] = useState([]);
    const handleAddNote = () => {
        if(note.trim() === "") return;
        addNote([...notes, note]);
        setNote("");
    }
    console.log(note);
    return(
        <>
        <input type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
        <button onClick={handleAddNote}>Add Note</button>
        <button onClick={() => addNote([])}>Clear All</button>
        {notes.length == 0 ? <p>Add a note first</p> : notes.map((n, i) => <p key={i}>{n}</p>)}
        </>
    )
}

export default NoteTaker;
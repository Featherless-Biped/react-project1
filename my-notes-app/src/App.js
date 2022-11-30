import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "This is my first note",
        },
        {
            id: nanoid(),
            text: "This is my second note",
        },
        {
            id: nanoid(),
            text: "This is my third note",
        },
        {
            id: nanoid(),
            text: "This is my fourth note",
        },
    ]);
    const addNote = (text) => {
      // const date = new Date()
       const newNote = {
        id: nanoid(),
        text: text,
       }
       const newNotes = [...notes, newNote]
       setNotes(newNotes)
    };
    return (
        <div className="container">
            <NotesList notes={[notes]} handleAddNote={addNote} />
        </div>
    );
};

export default App;

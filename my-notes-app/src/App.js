import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import ModalNote from "./components/ModalShit";

const App = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            title: "Note 2",
            text: "This is my first note!",
            date: "15/04/1902",
        },
        {
            id: nanoid(),
            title: "Note 4",
            text: "This is my second note!",
            date: "21/04/1703",
        },
        {
            id: nanoid(),
            title: "Note 33",
            text: "This is my third note!",
            date: "320 BC",
        },
    ]);

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem("react-notes-app-data")
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    }, [notes]);

    const addNote = (id, text, title) => {
        if (id == 0) {
            const date = new Date();
            const newNote = {
                id: nanoid(),
                title: title,
                text: text,
                date: date.toLocaleDateString(),
            };
            const newNotes = [...notes, newNote];
            setNotes(newNotes);
        } else {
            const newNotes = [...notes];
            for (let i = 0; i < newNotes.length; i++) {
                if (newNotes[i].id == id) {
                    newNotes[i].title = title;
                    newNotes[i].text = text;
                    break;
                }
            }
            setNotes(newNotes);
            handleCloseModal();
        }
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        handleCloseModal();
    };

    const [note, setNote] = useState("");
    const [showModal, setShowModal] = useState(false);

    const openModal = (note) => {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id == note) {
                setNote(notes[i]);
                break;
            }
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container">
            <NotesList
                notes={notes}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
                handleShowModal={openModal}
            />
            <ModalNote
                showModal={showModal}
                saveModal={addNote}
                note={note}
                handleCloseModal={handleCloseModal}
            />
        </div>
    );
};

export default App;

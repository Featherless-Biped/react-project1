import { useState, useEffect } from "react";
// import StaticExample from "./components/ModalShit.JS";
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

    // useEffect(()=> {
    // 	const makeNoteModal = notes.filter((note) => note.id == id);
    // 		setShowModal('True');
    // 	}
    // )

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

    const addNote = (text, title) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };
const [note, setNote] = useState('');
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    };
	const chooseNoteModal = (note) => {
		const noteToMakeModal = notes.findIndex(
		  (noteItem) => note.id === noteItem.id
		);
		const currentNotes = notes;
		currentNotes[noteToMakeModal] = note;
		setNotes(currentNotes);
		showModal();
	  };

    return (
        <div className="container">
            <NotesList
                note={note}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
                handleShowModal={chooseNoteModal}
            />
        <ModalNote showModal={openModal} setShowModal={setShowModal} note={notes} chooseNoteModal={chooseNoteModal} />
        </div>
    );
};

export default App;

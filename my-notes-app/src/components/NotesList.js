import Note from "./Note";
import AddNote from "./AddNote";

// import ModalNote from './ModalNotes';

const NotesList = ({
    notes,
    handleAddNote,
    handleDeleteNote,
    handleShowModal,
}) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <div>
                    <Note
                        id={note.id}
                        title={note.title}
                        text={note.text}
                        date={note.date}
                        handleDeleteNote={handleDeleteNote}
                        handleShowModal={handleShowModal}
                    />
                </div>
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;

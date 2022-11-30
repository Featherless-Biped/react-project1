import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote }) => {
    return (
        <div className="notes-list">
            <AddNote handleAddNote={handleAddNote} />
            {notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
				/>
			))}
        </div>
    );
};

export default NotesList;

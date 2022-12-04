import React, { useEffect, useState } from "react";

const AddNote = ({ handleAddNote, note, handleCloseModal }) => {
    const [toEdit, setToEdit] = useState(false);
    const [noteText, setNoteText] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const characterLimit = 200;

    useEffect(() => {
        if (note) {
            setNoteTitle(note.title);
            setNoteText(note.text);
            setToEdit(true);
        }
    }, [note]);

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleChange2 = (event) => {
        setNoteTitle(event.target.value);
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            let id = 0;
            if (toEdit) {
                id = note.id;
            }
            handleAddNote(id, noteText, noteTitle);
            setNoteText("");
            setNoteTitle("");
        }
    };

    return (
        <div className="note new">
            <textarea
                rows="1"
                cols="2"
                placeholder="Note Title"
                value={noteTitle}
                onChange={handleChange2}
            ></textarea>
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>
                    Save
                </button>
                {toEdit && (
                    <button className="save" onClick={handleCloseModal}>
                        Close
                    </button>
                )}
            </div>
        </div>
    );
};

export default AddNote;

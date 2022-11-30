import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    // const [noteTitle, setNoteTitle] = useState("")
    const [noteText, setNotesText] = useState("");
    const handleChange = (e) => {
        setNotesText(e.target.value);
        console.log(e.target.value)
    };
    const handleSaveClick = () =>{
        handleAddNote(noteText)
        // handleAddTitle(noteTitle)
        // setNotesText('')

    }
    return (
        <div className="note new">
         

            <textarea
                rows="8"
                cols="10"
                placeholder="Type a note"
                value={noteText}
                onChange={handleChange}
            ></textarea>

            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="submit" onClick={handleSaveClick}>Submit</button>
            </div>
        </div>
    );
};

export default AddNote;

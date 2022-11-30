import { useState } from "react";
function AddNote({ onAdd }) {
    const [userDetails, setUserDetails] = useState({});

    const handleChange = (e) => {
        const { value, name } = e.target;

        setUserDetails({ ...userDetails, [name]: value, id: Math.random() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(userDetails);
    };

    return (
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type a note"
                value={userDetails.text}
                onChange={handleChange}
            ></textarea>

            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AddNote;

// const AddNote = ({handleAddNote}) => {
//     // const [noteTitle, setNoteTitle] = useState("")
//     const [noteText, setNotesText] = useState("");
//     const handleChange = (e) => {
//         setNotesText(e.target.value);
//         console.log(e.target.value)
//     };
//     const handleSaveClick = () =>{
//         handleAddNote(noteText)
//         // handleAddTitle(noteTitle)
//         // setNotesText('')

//     }

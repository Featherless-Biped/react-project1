import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddNote from "./AddNote";

function ModalNote({ showModal, saveModal, note, handleCloseModal }) {
    const [noteModal, setNoteModal] = useState("");
    useEffect(() => {
        if (note) {
            setNoteModal(note);
        }
    }, [note]);

    return (
        <>
            {noteModal && (
                <Modal show={showModal}>
                    <AddNote
                        handleAddNote={saveModal}
                        note={noteModal}
                        handleCloseModal={handleCloseModal}
                    />
                </Modal>
            )}
        </>
    );
}
export default ModalNote;
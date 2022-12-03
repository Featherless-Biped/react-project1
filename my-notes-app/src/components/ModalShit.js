import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function ModalNote({ showModal, handleShowModal, note }) {
    const [noteModal, setNoteModal] = useState("");
    useEffect(() => {
        if (note) {
            setNoteModal(note);
        }
    }, [note]);
    
    return (
        <>
            {noteModal && (
                <Modal show={showModal} onHide={handleShowModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>The Note</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Edit Note Title:</Form.Label>
                        <Form.Control
                            placeholder="Title"
                            value={noteModal.title}
                            
                        />
                        <Form.Label>Edit Note:</Form.Label>
                        <Form.Control
                            placeholder="Message"
                            value={noteModal.text}
                            
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShowModal}>
                            Close
                        </Button>
                        <Button>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}
export default ModalNote;

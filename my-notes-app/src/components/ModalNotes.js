import { Modal } from "bootstrap";
// import React, { useState } from "react";
// import { ModalFooter } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

function ModalNote({ showModal }) {
    if (showModal) {
        return (
            <>
            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
            </>


        );
    } else {
        return null;
    }
}

export default ModalNote;

// <Modal id={id}>
// <Modal.Header closeButton>
//     <Modal.Title id="example-modal-sizes-title-lg">
//         {title}
//     </Modal.Title>
// </Modal.Header>
// <Modal.Body>{text}</Modal.Body>
// <Modal.Footer>{date}</Modal.Footer>
// </Modal>

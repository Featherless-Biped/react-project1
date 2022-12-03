import { Modal } from "bootstrap";
// import React, { useState } from "react";
// import { ModalFooter } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

function ModalNote({ showModal, setShowModal, id, title, text, date }) {
    if (showModal) {
        return (
            <Modal id={id}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{text}</Modal.Body>
                <Modal.Footer>{date}</Modal.Footer>

            </Modal>
        );
    } else {
        return null;
    }
}

export default ModalNote;

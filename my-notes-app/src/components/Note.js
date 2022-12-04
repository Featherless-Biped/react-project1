// import { Button } from "bootstrap";
import Button from "react-bootstrap/Button";
const Note = ({
    id,
    title,
    text,
    date,
    handleDeleteNote,
    handleShowModal,
    newDate,
}) => {
    return (
        <div className="note" onClick={() => handleShowModal(id)}>
            <h3>{title}</h3>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                {newDate && <small>Updated on: {newDate}</small>}

                <Button
                    onClick={() => handleDeleteNote(id)}
                    className="delete-icon"
                    size="1.3em"
                    variant="danger"
                >
                    X
                </Button>
            </div>
        </div>
    );
};

export default Note;

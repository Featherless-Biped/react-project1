const Note = ({id, text, title, date}) => {
    return <div className="note">
       
       
        <div>{text}</div>
        <small>{date}</small>
    </div>;
};

export default Note;

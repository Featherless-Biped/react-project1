const Note = ({ id, title, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<h3>{title}</h3>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<button
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				></button>
			</div>
		</div>
	);
};

export default Note;
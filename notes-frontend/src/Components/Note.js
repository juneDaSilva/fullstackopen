export const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important';
  return (
    <li>
      {note.content}
      <button className='note' onClick={toggleImportance}>
        {label}
      </button>
    </li>
  );
};
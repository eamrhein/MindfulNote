import React from 'react';

const NoteIndexItem = (props) => {
  const { note, receiveNote } = props;
  let notePreview = note.body.slice(0, 120);
  return (
    <div
      className="note-index-item unselectable"
      tabIndex={note.id}
      onClick={() =>receiveNote(note)}>
      <h3>{note.title}</h3>
      <p>{notePreview}</p>
    </div>
  );
}

export default NoteIndexItem;
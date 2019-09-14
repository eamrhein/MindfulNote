import React from 'react';
import { timeSince } from '../../util/calculations.js'

const NoteIndexItem = (props) => {
  const { note, receiveNote, deleteNote } = props;
  let notePreview = note.body.slice(0, 120);
  return (
    <div
      className="note-index-item unselectable"
      tabIndex={note.id}
      onClick={() => receiveNote(note)}>
      <div className="item-header">
        <h3>{note.title}</h3>
        <i
          className="fas fa-trash-alt"
          onClick={()=> deleteNote(note.id)}
        />
      </div>
      <p
        className="time-since">
        {timeSince(note.updatedAt)} ago
      </p>
      <p>{notePreview}</p>
    </div>
  );
}

export default NoteIndexItem;
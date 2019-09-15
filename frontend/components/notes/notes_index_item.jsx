import React from 'react';
import { timeSince } from '../../util/calculations.js';

const NoteIndexItem = (props) => {
  const { note, receiveNote, deleteNote } = props;
  const notePreview = note.body
    .replace(/<\/?[^>]+(>|$)/g, ' ')
    .slice(0, 100);
  return (
    <div
      className="note-index-item unselectable"
      tabIndex={note.id}
      onClick={() => receiveNote(note)}
    >
      <div className="item-header">
        <h3>{note.title || 'Untitled'}</h3>
        <i
          className="fas fa-trash-alt"
          onClick={() => deleteNote(note.id)}
        />
      </div>
      <p>{notePreview}</p>
      <p className="time-since">
        {timeSince(note.updatedAt)}
        {' '}
        ago
      </p>
    </div>
  );
};

export default NoteIndexItem;

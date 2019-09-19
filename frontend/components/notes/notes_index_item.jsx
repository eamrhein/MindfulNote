/* eslint-disable react/prop-types */
import React from 'react';
import { timeSince } from '../../util/calculations';

const NoteIndexItem = (props) => {
  const { note, receiveNote, deleteNote } = props;
  const notePreview = note.body
    .replace(/<\/?[^>]+(>|$)/g, ' ')
    .slice(0, 100);
  return (
    <button
      type="button"
      className="note-index-item unselectable"
      tabIndex={note.id}
      onClick={() => receiveNote(note)}
    >
      <div className="item-header">
        <h3>{note.title || 'Untitled'}</h3>
        <a
          onClick={() => deleteNote(note.id)}
          type="submit"
        >
          <i className="fas fa-trash-alt" />
        </a>
      </div>
      <p>{notePreview}</p>
      <p className="time-since">
        {timeSince(note.updatedAt)}
        {' '}
        ago
      </p>
    </button>
  );
};

export default NoteIndexItem;

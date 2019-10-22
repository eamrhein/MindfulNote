/* eslint-disable react/prop-types */

import React from 'react';
import NoteIndexItem from './notes_index_item';

const NotesIndex = ({ notes, receiveNote, deleteNote }) => {
  let notesArray = Object.values(notes).reverse();
  notesArray = notesArray.map((note) => (
    <NoteIndexItem
      className="note"
      key={note.id}
      note={note}
      receiveNote={receiveNote}
      deleteNote={deleteNote}
    />
  ));
  return (
    <div className="notes-index-wrapper">
      <div className="notes-index-title">
        <h1>All Notes</h1>
        <div>
          <p>
            { notesArray.length }
            {' '}
            notes
          </p>
        </div>
      </div>
      <div className="note-index-items">
        {notesArray}
      </div>
    </div>
  );
};

export default NotesIndex;

/* eslint-disable react/prop-types */
import React from 'react';
import NoteIndexItem from '../../notes/notes_index_item';

const NotebookDetailIndex = ({
  notes, notebook, receiveNote, deleteNote,
}) => {
  let title;
  if (notebook) {
    title = notebook.title;
  } else {
    title = '';
  }
  let notesArray = Object.values(notes)
    .filter((note) => (note.notebookId == notebook.id));
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
        <h1>{title}</h1>
        <div>
          <p>
            {notesArray.length}
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

export default NotebookDetailIndex;

/* eslint-disable react/prop-types */
import React from 'react';
import NoteIndexItem from '../../notes/notes_index_item';


class NotebookDetailIndex extends React.Component {
  componentDidUpdate(prevState) {
    const { receiveNote, notes, createNote } = this.props;
    if (prevState.notes[0] !== notes[0]) {
      if (notes[0]) {
        receiveNote(notes[0]);
      } else {
        createNote();
      }
    }
  }

  render() {
    const {
      notes, receiveNote, deleteNote, tag,
    } = this.props;
    let title;
    if (tag) {
      title = tag.name;
    } else {
      title = '';
    }
    const notesArray = notes.reverse().map((note) => (
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
  }
}

export default NotebookDetailIndex;

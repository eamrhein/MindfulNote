/* eslint-disable react/prop-types */

import React from 'react';
import NoteIndexItem from './notes_index_item'
class NotesIndex extends React.Component {

  render() {
    let { notes, receiveNote, deleteNote } = this.props;
    notes = Object.values(notes)
     notes = notes.map((note) =>  <NoteIndexItem
                        className="note"
                        key={note.id}
                        note={note}
                        receiveNote={receiveNote}
                        deleteNote = {deleteNote}
                      /> )
    return(
      <div className="notes-index-wrapper">
        <div className="notes-index-title">
          <h1>Notes</h1>
          <div>
            <p>{notes.length} notes</p>
          </div>
        </div>
        <div className="note-index-items">
          {notes}
        </div>
      </div>
    );
  }
}

export default NotesIndex;
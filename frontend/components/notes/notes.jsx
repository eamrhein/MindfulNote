import React from 'react';
import NavbarContainer from './notes_navbar_container'
import NotesIndexContainer from './notes_index_container';
import EditNoteDetailContainer from './edit_note_detail_container'
const Notes = (props) => {
    return(
      <main className="notes">
        <NavbarContainer />
        <NotesIndexContainer />
        <EditNoteDetailContainer />
      </main>
    );
};

export default Notes;

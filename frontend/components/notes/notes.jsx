import React, { useEffect } from 'react';
import NavbarContainer from './notes_navbar_container'
import NotesIndexContainer from './notes_index_container';
import NotesDetailContainer from './note_detail_container'
const Notes = (props) => {
  useEffect(() => {
    props.fetchNotes().then(
        res => {
          const notesKeys = Object.keys(res.notes);
          const postId = notesKeys[notesKeys.length - 1];
          if (postId) {
            props.receiveNote(res.notes[postId]);
          }
          else {
            props.createNote();
          }
        }
      )
  }, []);
    return(
      <main className="notes">
        <NavbarContainer />
        <NotesIndexContainer />
        <NotesDetailContainer />
      </main>
    );
};

export default Notes;

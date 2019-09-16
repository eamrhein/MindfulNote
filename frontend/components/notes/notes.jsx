/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import NavbarContainer from './notes_navbar_container';
import NotesIndexContainer from './notes_index_container';
import NotesDetailContainer from './note_detail_container';

const Notes = (props) => {
  useEffect(() => {
    props.fetchNotebooks().then(
      () => (
        props.fetchNotes().then(
          (res) => {
            const keys = Object.keys(res.notes);
            const id = keys[0];
            if (id) {
              props.receiveNote(res.notes[id]);
            } else {
              props.createNote();
            }
          },
        )
      ),
    );
  }, []);

  return (
    <main className="notes">
      <NavbarContainer />
      <NotesIndexContainer />
      <NotesDetailContainer />
    </main>
  );
};

export default Notes;

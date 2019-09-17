/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import NavbarContainer from '../../notes/notes_navbar_container';
import NotebookDetailIndexContainer from './notebook_detail_index_container';
import NoteDetailContainer from '../../notes/note_detail_container';

const NotebookDetail = (props) => {
  // useEffect(() => {
  //   props.fetchNotebooks().then(() => {
  //     props.fetchNotes().then(() => {
  //       props.fetchTags();
  //     });
  //   });
  // });

  return (
    <main className="notes">
      <NavbarContainer />
      <NotebookDetailIndexContainer />
      <NoteDetailContainer />
    </main>
  );
};

export default NotebookDetail;

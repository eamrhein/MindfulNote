/* eslint-disable react/prop-types */
import React from 'react';
import NotebookDetailIndexContainer from './notebook_detail_index_container';
import NoteDetailContainer from '../../notes/note_detail_container';

const NotebookDetail = () => (
  <main className="notes">
    <NotebookDetailIndexContainer />
    <NoteDetailContainer />
  </main>
);
export default NotebookDetail;

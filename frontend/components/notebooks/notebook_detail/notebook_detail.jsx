/* eslint-disable react/prop-types */
import React from 'react';
import NavbarContainer from '../../notes/notes_navbar_container';
import NotebookDetailIndexContainer from './notebook_detail_index_container';
import NoteDetailContainer from '../../notes/note_detail_container';

class NotebookDetail extends React.Component {
  componentDidMount() {
    const { fetchNotes, fetchNotebooks, fetchTags } = this.props;
    fetchNotebooks().then(() => {
      fetchNotes().then(() => {
        fetchTags();
      });
    });
  }

  render() {
    return (
      <main className="notes">
        <NavbarContainer />
        <NotebookDetailIndexContainer />
        <NoteDetailContainer />
      </main>
    );
  }
}

export default NotebookDetail;

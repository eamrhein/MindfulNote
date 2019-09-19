/* eslint-disable react/prop-types */
import React from 'react';
import NavbarContainer from '../../notes/notes_navbar_container';
import TagDetailIndexContainer from './tags_details_index_container';
import NoteDetailContainer from '../../notes/note_detail_container';

class TagDetail extends React.Component {
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
        <TagDetailIndexContainer />
        <NoteDetailContainer />
      </main>
    );
  }
}

export default TagDetail;

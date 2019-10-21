/* eslint-disable react/prop-types */
import React from 'react';
import TagDetailIndexContainer from './tags_details_index_container';
import NoteDetailContainer from '../../notes/note_detail_container';


const TagDetail = () => (
  <main className="notes">
    <TagDetailIndexContainer />
    <NoteDetailContainer />
  </main>
);

export default TagDetail;

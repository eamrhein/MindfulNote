/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ModalContainer from '../modal/modal_container';
import NavContainer from '../notes/notes_navbar_container';
import TagsIndexContainer from './tags_index_container';


const tags = (props) => {
  useEffect(() => {
    props.fetchNotebooks().then(() => {
      props.fetchNotes().then(() => {
        props.fetchTags();
      });
    });
  });

  return (
    <main className="notebooks">
      <ModalContainer />
      <NavContainer />
      <TagsIndexContainer />
    </main>
  );
};

export default tags;

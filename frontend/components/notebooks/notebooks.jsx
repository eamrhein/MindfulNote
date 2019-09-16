/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import NavContainer from '../notes/notes_navbar_container';
import NotebookIndexContainer from './notebooks_index/notebooks_index_container';
import ModalContainer from '../modal/modal_container';


const notebooks = (props) => {
  useEffect(() => {
    props.fetchNotebooks();
  }, []);

  return (
    <main className="notebooks">
      <ModalContainer />
      <NavContainer />
      <NotebookIndexContainer />
    </main>
  );
};

export default notebooks;

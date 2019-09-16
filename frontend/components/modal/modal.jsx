/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import CreateNotebookContaine from '../notebooks/create_notebook_container';

const Modal = ({ modal, closeModal }) => {
  switch (modal) {
    case 'createNotebook':
      return (
        <div
          className="modal-bg"
          onClick={closeModal}
        >
          <div className="modal-fg" onClick={(e) => e.stopPropagation()}>
            <CreateNotebookContaine />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Modal;

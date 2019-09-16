/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({
  logout, createNote, user, notebooks, currentNotebook,
}) => {
  let notebookList = Object.values(notebooks);
  notebookList = notebookList.map((notebook) => (
    <Link to={`/notebooks/${notebook.id}`}>
      <li className=" middle item-wrapper" key={notebook.id}>
        <div className="notebooks-nav">
          {notebook.title}
        </div>
      </li>
    </Link>
  ));

  let defaultNote;
  if (currentNotebook) {
    defaultNote = {
      note: {
        title: '',
        body: '',
        notebook_id: currentNotebook,
      },
    };
  } else {
    defaultNote = {
      note: {
        title: '',
        body: '',
      },
    };
  }

  return (
    <nav className="notes-navbar">
      <ul className="notes-navbar-wrapper">
        <li className="user-icon" onClick={() => logout()}>
          <span className="account item-wrapper">
            <i className="fas fa-sign-out-alt" />
          </span>
          {user.email}
        </li>
      </ul>
      <ul
        className="notes-navbar-wrapper"
        onClick={() => createNote(defaultNote)}
      >
        <li className="new-note item-wrapper">
          <i className="fas fa-plus" />
          <span>New Note</span>
        </li>
      </ul>
      <ul className="notes-navbar-wrapper">
        <Link to="/notes">
          <li className="middle item-wrapper outer ">
            <i className="fas fa-file-alt" />
            All Notes
        </li>
        </Link>
        <Link to="/notebooks">
          <li className="middle item-wrapper">
            <i className="fas fa-caret-down" />
            <i className="fas fa-book" />
            Notebooks
          </li>
        </Link>
        <ul>
          {notebookList}
        </ul>
        <li className="middle item-wrapper outer">
          <i className="fas fa-tag" />
          <span>Tags</span>
        </li>
      </ul>
    </nav>
  );
};

export default navBar;

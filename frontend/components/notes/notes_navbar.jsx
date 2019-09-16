/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({
  logout, createNote, user, notebooks, currentNotebook,
}) => {
  let notebookList = Object.values(notebooks);
  notebookList = notebookList.map((notebook) => (
    <li className="middle item-wrapper notebooks-nav" key={notebook.id}>
      <Link to={`/notebooks/${notebook.id}`}>
        {notebook.title}
      </Link>
    </li>
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
        <li className="middle item-wrapper outer ">
          <i className="fas fa-file-alt" />
          <Link to="/notes">All Notes</Link>
        </li>
        <li className="middle item-wrapper">
          <i className="fas fa-caret-down" />
          <i className="fas fa-book" />
          <Link to="/notebooks">Notebooks</Link>
        </li>
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

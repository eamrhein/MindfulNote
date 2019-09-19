/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({
  logout, createNote, user, notebooks, currentNotebook,
}) => {
  let notebookList = Object.values(notebooks);
  notebookList = notebookList.map((notebook) => (
    <Link key={notebook.id} to={`/notebooks/${notebook.id}`}>
      <li className=" middle item-wrapper">
        <div className="notebooks-nav">
          <i className="far fa-window-maximize" />
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
        <li className="user-icon">
          <button
            className="account item-wrapper"
            onClick={() => logout()}
            type="button"
          >
            <i className="fas fa-sign-out-alt" />
            {user.email}
          </button>
        </li>
      </ul>
      <ul className="notes-navbar-wrapper">
        <li className="new-note item-wrapper">
          <button
            onClick={() => createNote(defaultNote)}
            type="button"
          >
            <i className="fas fa-plus" />
            <span>New Note</span>
          </button>
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
        <Link to="/tags">
          <li className="middle item-wrapper outer">
            <i className="fas fa-tag" />
            <span>Tags</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default navBar;

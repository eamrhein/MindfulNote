/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({
  logout, createNote, user, notebooks,
}) => {
  let notebookList = Object.values(notebooks);
  notebookList = notebookList.map((notebook) => (
    <li key={notebook.id}>
      <Link to={`/notebooks/${notebook.id}`}>
        {notebook.title}
      </Link>
    </li>
  ));

  return (
    <nav className="notes-navbar">
      <div className="notes-navbar-wrapper">
        <div className="user-icon" onClick={() => logout()}>
          <span className="account item-wrapper">
            <i className="fas fa-sign-out-alt" />
          </span>
          {user.email}
        </div>
      </div>
      <div
        className="notes-navbar-wrapper"
        onClick={() => createNote()}
      >
        <div className="new-note item-wrapper">
          <i className="fas fa-plus" />
          <span>New Note</span>
        </div>
      </div>
      <div className="notes-navbar-wrapper">
        <div className="middle item-wrapper">
          <i className="fas fa-file-alt" />
          <Link to="/notes">All Notes</Link>
        </div>
        <div className="middle item-wrapper">
          <i className="fas fa-book" />
          <Link to="/notebooks">Notebooks</Link>
          <ul>
            {notebookList}
          </ul>
        </div>
        <div className="middle item-wrapper">
          <i className="fas fa-tag" />
          <span>Tags</span>
        </div>
      </div>
    </nav>
  );
};

export default navBar;

import React from 'react'

const navBar = ({logout, createNote, user }) => {

  return(
    <nav className="notes-navbar">
      <div className="notes-navbar-wrapper">
        <div className="user-icon" onClick={() => logout()}>
          <span className="account item-wrapper" >
            <i className="fas fa-sign-out-alt"></i>
          </span>
          {user.email}
        </div>
      </div>
      <div
        className="notes-navbar-wrapper"
        onClick={() => createNote()}
      >
        <div className="new-note item-wrapper">
          <i className="fas fa-plus"></i>
          <span>New Note</span>
        </div>
      </div>

      <div className="notes-navbar-wrapper">
        <div className="middle item-wrapper selected-nav" >
            <i className="fas fa-file-alt"></i>
            <span>All Notes</span>
        </div>
        <div className="middle item-wrapper" >
            <i className="fas fa-book"></i>
            <span>Notebooks</span>
        </div>
        <div className="middle item-wrapper" >
            <i className="fas fa-tag"></i>
          <span>Tags</span>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
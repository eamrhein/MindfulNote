import React from 'react'

const navBar = ({logout}) => {

  return(
    <nav className="notes-navbar">
      <div className="notes-navbar-wrapper">
        <i className="fas fa-brain"></i>
      </div>

      <div className="notes-navbar-wrapper">
        <div className="new-note icon-wrapper">
            <i className="fas fa-plus"></i>
        </div>
        <div className="new-note icon-wrapper">
          <i className="fas fa-plus"></i>
        </div>
        <div className="new-note icon-wrapper">
          <i className="fas fa-plus"></i>
        </div>
        <div className="new-note icon-wrapper">
          <i className="fas fa-plus"></i>
        </div>
      </div>

      <div className="notes-navbar-wrapper">
        <div className="middle icon-wrapper" >
            <i className="fas fa-file-alt"></i>
        </div>

        <div className="middle icon-wrapper" >
            <i className="fas fa-book"></i>
        </div>

        <div className="middle icon-wrapper" >
            <i className="fas fa-tag"></i>
        </div>
      </div>

      <div className="notes-navbar-wrapper">

        <div className="account icon-wrapper" onClick={()=> logout()} >
            <i className="fas fa-sign-out-alt"></i>
        </div>

      </div>
    </nav>
  );
}

export default navBar;
import React from 'react';

class Notes extends React.Component {

  render(){
    const { user } = this.props;
    return(
      <div>
        <nav className="sidebar" >
          <div className="sidebar-contents">
            <div className="main">
              <li>
                <a id="note" href="#"><i class="fas fa-plus-circle"></i></a>
              </li>
              <li>
                <a href="#"><i class="fas fa-sticky-note"></i></a>
              </li>
              <li>
                <a href="#"><i class="fas fa-book"></i></a>
              </li>
              <li>
                <a href="#"><i class="fas fa-book-open"></i></a>
              </li>
            </div>
            <div>
              <li>
                <button onClick={() => this.props.logout()}><i class="fas fa-sign-out-alt"></i></button>
              </li>
            </div>
          </div>
        </nav>
        <section className="notes">
          <strong>notebook title</strong>
          <span>
            <input placeholder="new tag" />
          </span>
          <hr />
          <h1> Title your note </h1>
          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</section>

      </div>
    );
  }
}

export default Notes;
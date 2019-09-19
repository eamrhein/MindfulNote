/* eslint-disable react/prop-types */
import React from 'react';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    const { user, notebook, deleteNotebook } = this.props;
    const { showMenu } = this.state;
    let deleteButton = 'Main';
    if (user.email !== notebook.title) {
      deleteButton = (
        <li>
          <button onClick={() => deleteNotebook(notebook.id)} type="submit">
            Delete
          </button>
        </li>
      );
    }
    return (
      <div>
        <button
          type="button"
          onClick={this.showMenu}
        >
          <i className="fas fa-ellipsis-v" />
        </button>

        {showMenu ? (
          <div
            className="notebook-menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            {deleteButton}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;

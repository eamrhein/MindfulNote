/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

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
    if (this.dropdownMenu) {
      if (!this.dropdownMenu.contains(event.target)) {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }
    }
  }

  render() {
    const { tag, deleteTag } = this.props;
    const { showMenu } = this.state;
    return (
      <div>
        <button type="button" onClick={this.showMenu}>
          {tag.name}
          &nbsp; ({tag.noteIds.length || 0})
        </button>
        {showMenu ? (
          <div
            className="notebook-menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <li>
              <Link to={`/tags/${tag.id}`}>Filter by Tag</Link>
            </li>
            <li>
              <button onClick={() => deleteTag(tag.id)} type="submit">
                Delete
              </button>
            </li>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;

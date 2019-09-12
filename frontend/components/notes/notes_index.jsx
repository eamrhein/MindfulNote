/* eslint-disable react/prop-types */

import React from 'react';


class NotesIndex extends React.Component {

  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    let { notes } = this.props;
    notes = Object.values(notes)
      .map((note) => <li key={note.id}>{note.title}</li>)
    return(
      <ul>
        {notes}
      </ul>
    );
  }
}

export default NotesIndex;
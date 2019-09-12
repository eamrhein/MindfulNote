import React from 'react';
import NavbarContainer from './notes_navbar_container'
import NotesIndexContainer from './notes_index_container'
const Notes = (props) => {
    return(
      <main className="notes">
        <NavbarContainer />
        <NotesIndexContainer />
        {/*<CurrentNote /> */}
      </main>
    );
};

export default Notes;
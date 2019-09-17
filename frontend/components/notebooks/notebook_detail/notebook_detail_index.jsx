/* eslint-disable react/prop-types */
import React from 'react';
import NoteIndexItem from '../../notes/notes_index_item';


class NotebookDetailIndex extends React.Component {
  componentDidUpdate(prevState) {
    const { receiveNote, notes } = this.props;
    if (prevState.notes[0] !== notes[0]) {
      receiveNote(notes[0]);
    }
  }

  render() {
    const {
      notes, receiveNote, deleteNote, notebook,
    } = this.props;

    let title;
    if (notebook) {
      title = notebook.title;
    } else {
      title = '';
    }
    const notesArray = notes.map((note) => (
      <NoteIndexItem
        className="note"
        key={note.id}
        note={note}
        receiveNote={receiveNote}
        deleteNote={deleteNote}
      />
    ));

    return (
      <div className="notes-index-wrapper">
        <div className="notes-index-title">
          <h1>{title}</h1>
          <div>
            <p>
              {notesArray.length}
              {' '}
              notes
            </p>
          </div>
        </div>
        <div className="note-index-items">
          {notesArray}
        </div>
      </div>
    );
  }
}

// const NotebookDetailIndex = ({
//   notes, receiveNote, deleteNote, notebook,
// }) => {
//   useEffect(() => {
//     if (notes[0]) {
//       receiveNote(notes[0]);
//     }
//   }, []);

//   let title;
//   if (notebook) {
//     title = notebook.title;
//   } else {
//     title = '';
//   }
//   const notesArray = notes.map((note) => (
//     <NoteIndexItem
//       className="note"
//       key={note.id}
//       note={note}
//       receiveNote={receiveNote}
//       deleteNote={deleteNote}
//     />
//   ));

//   return (
//     <div className="notes-index-wrapper">
//       <div className="notes-index-title">
//         <h1>{title}</h1>
//         <div>
//           <p>
//             {notesArray.length}
//             {' '}
//             notes
//           </p>
//         </div>
//       </div>
//       <div className="note-index-items">
//         {notesArray}
//       </div>
//     </div>
//   );
// };

export default NotebookDetailIndex;

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NotesNavbar from './notes_navbar';
import { logout, currentNoteBook } from '../../actions/session_actions';
import { fetchNotes, receiveNote, createNote } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';
import { fetchTags } from '../../actions/tag_actions';


const mapStateToProps = (state) => ({
  notes: state.entities.notes,
  user: state.entities.users[state.session.id],
  notebooks: state.entities.notebooks,
  current: state.session.currentNotebook || Object.keys(state.entities.notebooks)[0] || [],
});

const mapDTP = (dispatch) => ({
  setCurrentNotebook: (id) => dispatch(currentNoteBook(id)),
  fetchTags: () => dispatch(fetchTags()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  receiveNote: (note) => dispatch(receiveNote(note)),
  createNote: (note) => dispatch(createNote(note)),
  logout: () => dispatch(logout()),
});


export default withRouter(connect(mapStateToProps, mapDTP)(NotesNavbar));

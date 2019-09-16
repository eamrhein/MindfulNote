import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NotesNavbar from './notes_navbar';
import { logout } from '../../actions/session_actions';
import { createNote } from '../../actions/note_actions';


const mapStateToProps = (state, ownProps) => ({
  notes: state.entities.notes,
  user: state.entities.users[state.session.id],
  notebooks: state.entities.notebooks,
  currentNotebook: ownProps.match.params.id,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  createNote: (note) => dispatch(createNote(note)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesNavbar));

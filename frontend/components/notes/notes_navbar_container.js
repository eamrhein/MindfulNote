import { connect } from 'react-redux';
import NotesNavbar from './notes_navbar';
import { logout } from '../../actions/session_actions';
import { createNote } from '../../actions/note_actions';


const mapStateToProps = (state) => ({
  notes: state.entities.notes,
  user: state.entities.users[state.session.id],
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  createNote: () => dispatch(createNote({ note: { title: 'New note', body: '...' } })),
});


export default connect(mapStateToProps, mapDispatchToProps)(NotesNavbar);


import { connect } from 'react-redux';
import Notes from './notes';
import { logout } from '../../actions/session_actions';
import { fetchNotes } from '../../actions/note_actions';

const mapSTP = (state) => ({
  user: state.entities.users[state.session.id],
  notes: state.entities.notes,
});

const mapDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapSTP, mapDTP)(Notes);

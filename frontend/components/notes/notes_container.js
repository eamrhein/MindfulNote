
import { connect } from 'react-redux';
import Notes from './notes';
import { fetchNotes, receiveNote } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mapSTP = (state) => ({
  user: state.entities.users[state.session.id],
  notes: state.entities.notes,
  loading: state.ui.loading,
});

const mapDTP = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  receiveNote: (note) => dispatch(receiveNote(note)),
});

export default connect(mapSTP, mapDTP)(Notes);

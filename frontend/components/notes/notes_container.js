
import { connect } from 'react-redux';
import Notes from './notes';
import { fetchNotes, receiveNote, createNote } from '../../actions/note_actions';
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
  createNote: () => dispatch(createNote({ note: { title: '', body: '' } })),
});

export default connect(mapSTP, mapDTP)(Notes);

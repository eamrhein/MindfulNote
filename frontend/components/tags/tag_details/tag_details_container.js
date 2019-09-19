import { connect } from 'react-redux';
import TagDetail from './tag_details';
import {
  fetchNotes,
  receiveNote,
  createNote,
} from '../../../actions/note_actions';
import { fetchNotebooks } from '../../../actions/notebook_actions';
import { fetchTags } from '../../../actions/tag_actions';

const mapSTP = (state) => ({
  user: state.entities.users[state.session.id],
  notes: state.entities.notes,
  loading: state.ui.loading,
});

const mapDTP = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchTags: () => dispatch(fetchTags()),
  receiveNote: (note) => dispatch(receiveNote(note)),
  createNote: () => dispatch(createNote({ note: { title: '', body: '' } }))
});

export default connect(
  mapSTP,
  mapDTP,
)(TagDetail);

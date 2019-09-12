import { connect } from 'react-redux';
import NoteDetailForm from './note_detail_form';
import { updateNote } from '../../actions/note_actions';

const mapSTP = (state) => ({
  note: state.ui.activeNote,
});

const mapDTP = (dispatch) => ({
  updateNote: (note) => dispatch(updateNote(note)),
});

export default connect(mapSTP, mapDTP)(NoteDetailForm);

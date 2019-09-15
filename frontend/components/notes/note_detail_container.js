import { connect } from 'react-redux';
import NoteDetailForm from './note_detail_form';
import { updateNote, createNote } from '../../actions/note_actions';

const blankNote = {
  title: '',
  body: '',
};
const mapSTP = (state) => ({
  note: state.ui.activeNote,
});

const mapDTP = (dispatch) => ({
  updateNote: (note) => dispatch(updateNote(note)),
  createNote: () => dispatch(createNote(blankNote)),
});

export default connect(mapSTP, mapDTP)(NoteDetailForm);

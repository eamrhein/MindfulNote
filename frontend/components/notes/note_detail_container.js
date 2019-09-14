import { connect } from 'react-redux';
import NoteDetailForm from './note_detail_form';
import {
  updateNote,
  fetchNotes,
  fetchNote,
 } from '../../actions/note_actions';

const mapSTP = (state) => ({
  note: state.ui.activeNote,
  loading: state.ui.loading,
  notes: state.entities.notes,
});

const mapDTP = (dispatch) => ({
  updateNote: (note) => dispatch(updateNote(note)),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (id) => dispatch(fetchNote(id)),
});

export default connect(mapSTP, mapDTP)(NoteDetailForm);

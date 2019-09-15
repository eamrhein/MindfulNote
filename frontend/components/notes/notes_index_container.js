import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import {
  receiveNote,
  deleteNote,
} from '../../actions/note_actions';


const mapStateToProps = (state) => ({
  notes: state.entities.notes,
});

const mapDispatchToProps = (dispatch) => ({
  receiveNote: (note) => dispatch(receiveNote(note)),
  deleteNote: (id) => dispatch(deleteNote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);

import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { fetchNotes } from '../../actions/note_actions'


const mapStateToProps = (state) => {
  return {
    notes: state.entities.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
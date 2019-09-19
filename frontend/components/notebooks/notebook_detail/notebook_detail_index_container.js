import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookDetailIndex from './notebook_detail_index';
import {
  receiveNote,
  deleteNote,
  createNote,
} from '../../../actions/note_actions';


const mapStateToProps = (state, ownProps) => ({
  notes: Object.values(state.entities.notes)
    // eslint-disable-next-line eqeqeq
    .filter((note) => (note.notebookId == ownProps.match.params.id)),
  notebook: state.entities.notebooks[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch) => ({
  receiveNote: (note) => dispatch(receiveNote(note)),
  deleteNote: (id) => dispatch(deleteNote(id)),
  createNote: () => dispatch(createNote({ note: { title: '', body: '' } })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookDetailIndex));

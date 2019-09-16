import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookDetailIndex from './notebook_detail_index';
import {
  receiveNote,
  deleteNote,
} from '../../../actions/note_actions';


const mapStateToProps = (state, ownProps) => ({
  notes: state.entities.notes,
  notebook: state.entities.notebooks[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch) => ({
  receiveNote: (note) => dispatch(receiveNote(note)),
  deleteNote: (id) => dispatch(deleteNote(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookDetailIndex));

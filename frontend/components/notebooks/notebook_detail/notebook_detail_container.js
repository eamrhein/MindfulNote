
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookDetail from './notebook_detail';
import { receiveNote, createNote } from '../../../actions/note_actions';


const mapSTP = (state) => ({
  user: state.entities.users[state.session.id],
  notes: state.entities.notes,
  loading: state.ui.loading,
});

const mapDTP = (dispatch) => ({
  receiveNote: (note) => dispatch(receiveNote(note)),
  createNote: () => dispatch(createNote({ note: { title: '', body: '' } })),
});

export default withRouter(connect(mapSTP, mapDTP)(NotebookDetail));

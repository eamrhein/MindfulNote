import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TagDetailIndex from './tag_detail_index';

import {
  receiveNote,
  deleteNote,
  createNote,
} from '../../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: Object.values(state.entities.notes)
    .filter((note) => (
      note.tagIds.includes(parseInt(ownProps.match.params.id, 10)))),
  tag: state.entities.tags[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch) => ({
  receiveNote: (note) => dispatch(receiveNote(note)),
  deleteNote: (id) => dispatch(deleteNote(id)),
  createNote: () => dispatch(createNote({ note: { title: '', body: '' } })),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagDetailIndex));

import { connect } from 'react-redux';
import BottomTag from './bottomtag';
import { createTag, fetchTags } from '../../actions/tag_actions';

const mapSTP = (state) => ({
  tags: Object.values(state.entities.tags)
    .filter((tag) => tag.noteIds.includes(state.ui.activeNote.id)),
  noteId: state.ui.activeNote.id,
  userTags: Object.values(state.entities.tags),
});

const mapDTP = (dispatch) => ({
  createTag: (tag) => dispatch(createTag(tag)),
  fetchTags: () => dispatch(fetchTags()),
});

export default connect(mapSTP, mapDTP)(BottomTag);

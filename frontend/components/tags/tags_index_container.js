import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { openModal } from '../../actions/modal_actions';
import { deleteTag } from '../../actions/tag_actions';

const mapSTP = (state) => ({
  tags: state.entities.tags,
});

const mapDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  deleteTag: (id) => dispatch(deleteTag(id)),
});

export default connect(mapSTP, mapDTP)(TagsIndex);

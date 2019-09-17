import { connect } from 'react-redux';
import CreateTag from './create_tag';
import { createTag, fetchTags } from '../../actions/tag_actions';
import { closeModal } from '../../actions/modal_actions';

const mapDTP = (dispatch) => ({
  createTag: (tag) => dispatch(createTag(tag)),
  fetchTags: () => dispatch(fetchTags()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDTP)(CreateTag);

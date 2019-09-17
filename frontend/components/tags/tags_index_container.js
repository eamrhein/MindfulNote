import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { openModal } from '../../actions/modal_actions';
const mapSTP = (state) => ({
  tags: state.entities.tags,
});

const mapDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mapSTP, mapDTP)(TagsIndex);

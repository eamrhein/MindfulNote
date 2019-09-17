import { connect } from 'react-redux';
import Tags from './tags';
import { fetchTags } from '../../actions/tag_actions';
import { fetchNotes } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mapDTP = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
});

export default connect(null, mapDTP)(Tags);
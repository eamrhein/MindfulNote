import { connect } from 'react-redux';
import Notebooks from './notebooks';
import { fetchNotebooks } from '../../actions/notebook_actions';
import { fetchNotes } from '../../actions/note_actions';
import { fetchTags } from '../../actions/tag_actions';

const mapDTP = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchTags: () => dispatch(fetchTags()),
});

export default connect(null, mapDTP)(Notebooks);

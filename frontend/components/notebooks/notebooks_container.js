import { connect } from 'react-redux';
import Notebooks from './notebooks';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mapDTP = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
});

export default connect(null, mapDTP)(Notebooks);

import { connect } from 'react-redux';
import Loading from './loading';

const mapSTP = (state) => ({
  loading: state.ui.loading,
});

export default connect(mapSTP)(Loading)
import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { openModal } from '../../actions/modal_actions';

const mapSTP = (state) => ({
  notebooks: state.entities.notebooks,
});

const mapDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapSTP, mapDTP)(NotebooksIndex);

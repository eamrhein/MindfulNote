import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mapSTP = (state) => ({
  modal: state.ui.modal,
});

const mapDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapSTP, mapDTP)(Modal);

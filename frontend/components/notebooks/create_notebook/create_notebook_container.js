import { connect } from 'react-redux';
import CreateNotebook from './create_notebook';
import { createNotebook } from '../../../actions/notebook_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapDTP = (dispatch) => ({
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDTP)(CreateNotebook);

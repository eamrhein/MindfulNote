import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import NotebooksIndex from './notebooks_index';
import { openModal } from '../../../actions/modal_actions';
import { deleteNotebook } from '../../../actions/notebook_actions';

const mapSTP = (state) => ({
  notebooks: state.entities.notebooks,
  user: state.entities.users[state.session.id],
});

const mapDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
});

export default withRouter(connect(mapSTP, mapDTP)(NotebooksIndex));

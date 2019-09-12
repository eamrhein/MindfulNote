import { connect } from 'react-redux';
import NotesNavbar from './notes_navbar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => {
  return {
    notes: state.entities.notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesNavbar);

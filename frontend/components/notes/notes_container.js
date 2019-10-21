
import { connect } from 'react-redux';
import Notes from './notes';

const mapSTP = (state) => ({
  user: state.entities.users[state.session.id],
  notes: state.entities.notes,
  loading: state.ui.loading,
});


export default connect(mapSTP)(Notes);

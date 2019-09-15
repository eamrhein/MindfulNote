import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';


const mapSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up',
  link: <Link className="link" to="/login"> Sign in </Link>,
});

const mapDTP = (dispatch) => ({
  submitForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapSTP, mapDTP)(SessionForm);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';


const mapSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  link: <Link to="/signup"> Sign Up </Link>,
});

const mapDTP = (dispatch) => ({
  submitForm: (user) => dispatch(signup(user)),
});

export default connect(mapSTP, mapDTP)(SessionForm);
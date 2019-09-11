import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';


const mapSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'demo',
  demoLogin: { email: "demo@demo.com", password:"123456"},
  link: <Link className="link" to="/signup"> Create Account </Link>,
});

const mapDTP = (dispatch) => ({
  submitForm: (user) => dispatch(login(user)),
});

export default connect(mapSTP, mapDTP)(SessionForm);
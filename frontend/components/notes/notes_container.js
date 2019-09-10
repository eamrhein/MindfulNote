import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Notes from './notes';
import { logout } from '../../actions/session_actions';


const mapSTP = (state) => ({
  user: state.entities.users[state.session.id],
});

const mapDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapSTP, mapDTP)(Notes);
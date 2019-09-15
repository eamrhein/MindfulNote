/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';


const Auth = ({
  component: Component, path, loggedIn, exact,
}) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => (!loggedIn ? <Component {...props} /> : <Redirect to="/notes" />)}
  />
);

const Protected = ({
  component: Component, path, loggedIn, exact,
}) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => (loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    ))}
  />
);

const mapStateToProps = (state) => ({ loggedIn: Boolean(state.session.id) });

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null,
  )(Auth),
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null,
  )(Protected),
);

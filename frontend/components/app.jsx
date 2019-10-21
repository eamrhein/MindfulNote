import React from 'react';
import { Switch } from 'react-router-dom';
import LandingContainer from './landing/landing_container';
import LoginForm from './session/login_form_container';
import SignUpForm from './session/signup_form_container';
import DemoLoginContainer from './session/demo_login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoadingContainer from './loading_container';
import Main from './main';

const App = () => (
  <main>
    <LoadingContainer />
    <Switch>
      <AuthRoute exact path="/landing" component={LandingContainer} />
      <AuthRoute exact path="/demo" component={DemoLoginContainer} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignUpForm} />
      <ProtectedRoute path="/" component={Main} />
    </Switch>
  </main>
);

export default App;

import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import LandingContainer from './landing/landing_container';
import LoginForm from './session/login_form_container';
import SignUpForm from './session/signup_form_container';
const App = () => (
  <div>
    <Switch>
      <Route exact path="/demo" component={LoginForm}/>}
        <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignUpForm} />
        <Route path="/" component={LandingContainer} />
        <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
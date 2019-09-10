import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import LandingContainer from './landing/landing_container';
import LoginForm from './session/login_form_container';
import SignUpForm from './session/signup_form_container';
import NotesContainer from './notes/notes_container';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/demo" component={LoginForm}/>
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignUpForm} />
      <ProtectedRoute exact path="/notes" component={NotesContainer} />
      <AuthRoute path="/" component={LandingContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
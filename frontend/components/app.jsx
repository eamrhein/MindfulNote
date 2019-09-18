import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import LandingContainer from './landing/landing_container';
import LoginForm from './session/login_form_container';
import SignUpForm from './session/signup_form_container';
import DemoLoginContainer from './session/demo_login_container';
import NotesContainer from './notes/notes_container';
import NotebooksContainer from './notebooks/notebooks_container';
import NotebookDetailContainer from './notebooks/notebook_detail/notebook_detail_container';
import TagsContainer from './tags/tags_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoadingContainer from './loading_container';
const App = () => (
  <div>
    <LoadingContainer />
    <Switch>
      <AuthRoute exact path="/demo" component={DemoLoginContainer} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignUpForm} />
      <ProtectedRoute exact path="/notes" component={NotesContainer} />
      <ProtectedRoute exact path="/tags" component={TagsContainer} />
      <ProtectedRoute
        exact
        path="/notebooks/:id"
        component={NotebookDetailContainer}
      />
      <ProtectedRoute exact path="/notebooks" component={NotebooksContainer} />
      <AuthRoute path="/" component={LandingContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

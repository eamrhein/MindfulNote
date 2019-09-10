import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import LandingContainer from './landing/landing_container';
const App = () => (
  <div>
    <Switch>
        <Route path="/" component={LandingContainer} />
        <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
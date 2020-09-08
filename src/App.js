import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

const App = () => (
  <div id="meals">
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  </div>
);

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Provider from './context/AppProvider';

import Login from './pages/Login';
import Perfil from './pages/Perfil';

const App = () => (
  <div id="meals">
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/perfil" component={Perfil} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Provider from './context/AppProvider';

import Rotas from './routes';

import './App.css';

const App = () => (
  <Fragment>
    <Provider>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </Provider>
  </Fragment>
);

export default App;

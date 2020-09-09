import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Provider from './context/AppProvider';

import Rotas from './routes';

const App = () => (
  <div id="meals">
    <Provider>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;

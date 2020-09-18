import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Provider from '../context/AppProvider';

const renderWithRouter = (component, initialRoute = ['/']) => {
  const history = createMemoryHistory({ initialRoute });
  return {
    ...render(<Router history={history}><Provider>{component}</Provider></Router>),
    history,
  };
};

export default renderWithRouter;

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

const returnVal = render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

it('Renders Home', () => {
  expect(returnVal.getByText('Home')).not.toBeNull();
});

it('Renders useCallback', () => {
  expect(returnVal.findByText('useCallback example')).not.toBeNull();
})

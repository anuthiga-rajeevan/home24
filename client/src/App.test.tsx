import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingStatus } from './types/types';

const initialState = {
  product: {
    products: {
      categories: [
        {
          name: 'Living Room',
          categoryArticles: { articles: [] },
          articleCount: 850,
          childrenCategories: { list: [] },
        }
      ]
    },
    getProductStatus: LoadingStatus.idle,
  },
  alert: [],
};
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store;


test('renders Header', () => {
  store = mockStore(initialState);
  render(<Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>);
  const headerElement = screen.getByRole('Header');
  expect(headerElement).toBeInTheDocument();
});

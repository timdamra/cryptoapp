import './normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import './theme/GlobalStyles';

import App from './components/App';
import reducers from './reducers';

const thunk = applyMiddleware(reduxThunk);
const store = createStore(reducers, {}, thunk);

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);

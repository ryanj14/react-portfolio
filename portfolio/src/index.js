import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>, 
  document.querySelector('#root')
);
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  typeof window === 'object' &&
  type of window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENTSION() : f => f
);

export default store;
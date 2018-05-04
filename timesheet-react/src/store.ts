import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { state, State } from './reducers';

export const store: Store<{}> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk, logger),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

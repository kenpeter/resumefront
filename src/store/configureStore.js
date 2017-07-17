// import
// createStore
// apply middle ware (thunk)
// from redux
import { createStore, applyMiddleware } from 'redux';
// asyn fetch
import thunk from 'redux-thunk';
// root reducer with combined reducers???
import rootReducer from '../reducers';

// export default function
// configure store with init state
export default function configureStore(initialState) {
  // we return a complete state of the app
  return createStore(
    // root reducer
    rootReducer,
    // init state
    initialState,
    // thunk middle ware
    applyMiddleware(thunk)
  );
}

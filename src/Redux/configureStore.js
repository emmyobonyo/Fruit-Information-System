import { createStore, combineReducers, applyMiddleWare } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({

});

const store = createStore(
  reducer,
  applyMiddleWare(logger, thunk),
);

export default store;
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './Rockets/rockets';

const rootStore = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(
  rootStore,
  applyMiddleware(thunk),
);

export default store;
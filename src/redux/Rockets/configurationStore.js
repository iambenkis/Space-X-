import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './Rockets/rockets';

const rootStore = combineReducers({
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer : rootStore,
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import rocketsReducer from './Rockets/rockets';

const rootStore = combineReducers({
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer: rootStore,
});

export default store;

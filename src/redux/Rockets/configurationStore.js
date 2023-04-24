import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import rockectsSlice from './Rockets/rockets';
import MissionSlice from '../Missions/MissionSlice';
import usersSlice from '../users/usersSlice';

const rootStore = combineReducers({
  rockets: rockectsSlice,
  missions: MissionSlice,
  users: usersSlice
});

const store = configureStore({
  reducer: rootStore,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import rockectsSlice from './Rockets/rockets';
import MissionSlice from '../Missions/MissionSlice';

const rootStore = combineReducers({
  rockets: rockectsSlice,
  missions: MissionSlice,
});

const store = configureStore({
  reducer: rootStore,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

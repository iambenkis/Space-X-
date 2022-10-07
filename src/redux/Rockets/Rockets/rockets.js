import { createAsyncThunk } from '@reduxjs/toolkit';

const ROCKETS_API_KEY = 'https://api.spacexdata.com/v3/rockets';

export const reservePlace = (rockets) => ({
  type: 'RESERVE',
  payload: {
    id: rockets.id,
  },
});

export const readRockets = (rockets) => ({
  type: 'READ',
  payload: rockets,
});

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVE':
    { const newState = state.map((each) => {
      if (each.id === action.payload.id) {
        const data = {
          ...each,
          reserved: !each.reserved,
        };
        return data;
      }
      return each;
    });
    return newState; }
    case 'CANCEL/fulfilled':
      return [...state, action.payload];
    case 'READ/fulfilled':
      return action.payload;
    default:
      return state;
  }
};

export const getRockets = createAsyncThunk('READ',
  async () => {
    const res = await (await fetch(ROCKETS_API_KEY)).json();
    const rockets = res.map((e) => ({
      id: e.id,
      name: e.rocket_name,
      description: e.description,
      image: e.flickr_images,
      reserved: false,
    }));
    return rockets;
  });

export default rocketsReducer;

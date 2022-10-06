import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ROCKETS_API_KEY = 'https://api.spacexdata.com/v3/rockets';

export const reservePlace = (rockets) => ({
    type: 'RESERVE',
    payload: {
      id : rockets.id,
    },
 });

  export const cancelReservation = (rockets) => ({
    type: 'CANCEL',
    payload: rockets,
  });

  export const readRockets = (rockets) => ({
    type: 'READ',
    payload: rockets,
 });

  const initialState = [];

  const rocketsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RESERVE':
        const newState = state.map((each) => {
          console.log(action.payload, state)
          if (each.id === action.payload.id) {
            each.reserved = !each.reserved;
          }
          return each;
          });
        return newState;
      case 'CANCEL/fulfilled':
        return [...state,action.payload];
      case 'READ/fulfilled':
        return action.payload;
      default:
        return state;
    }
  };

  export const getRockets = createAsyncThunk('READ',
  async () => {
    const res = await axios.get(ROCKETS_API_KEY);
    const rockets = res.data.map((e) => ({
       id: e.id,
       name : e.rocket_name,
       description : e.description,
       image : e.flickr_images,
       reserved : false,
    }));
    return rockets;
  });

  // export const reservedRocket =

  export default rocketsReducer;
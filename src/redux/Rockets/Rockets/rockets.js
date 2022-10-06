import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ROCKETS_API_KEY = 'https://api.spacexdata.com/v3/rockets';

export const reservePlace = (rockets) => ({
    type: 'RESERVE',
    payload: rockets,
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
    console.log(action.type)
    switch (action.type) {
      case 'RESERVE/fulfilled':
        return [...state,action.payload];
      case 'CANCEL/fulfilled':
        return [...state,action.payload];
      case 'READ/fulfilled':
        return [...state,action.payload];
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
       image : e.flickr_images
    }));
    return rockets;
  });

  // export const reservedRocket =

  export default rocketsReducer;
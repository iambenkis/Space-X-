import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ROCKETS_API_KEY = 'https://api.spacexdata.com/v3/rockets';

export const reservePlace = (index) => ({
    type: 'RESERVE',
    payload: index,
  });

  export const cancelReservation = (book) => ({
    type: 'CANCEL',
    payload: book,
  });

  export const readRockets = (books) => ({
    type: 'READ',
    payload: books,
  });

  const initialState = [];

  const rocketsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RESERVE':
        console.log("I'm in")
        return [...state];
      case 'CANCEL':
        console.log("I'm in")
        return [...state];
      case 'READ':
        console.log("I'm in")
        return [...state];
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

  export default rocketsReducer;
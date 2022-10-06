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
        return [...state];
      case 'CANCEL':
        return [...state];
      case 'READ':
        return [...state];
      default:
        return state;
    }
  };

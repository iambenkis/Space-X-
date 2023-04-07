import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';  

const ROCKETS_API_KEY = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

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

const rockectsSlice = createSlice({
  initialState,
  name: "rockets",
  reducers : {
    reservePlace : {
      reducer : (draft, action) => {
        draft.map((each) => {
          if (each.id === action.payload.id) {
            each.reserved = !each.reserved 
          } 
        });
        return ;
      },
      prepare : (rockets) => {
        return {
          payload: {
            id: rockets.id,
          }
        }
      },
    },
  },
  extraReducers : {
    [getRockets.fulfilled] : (state, action) => {
      return action.payload
    }
  }
})

export const { reservePlace } = rockectsSlice.actions;
export default rockectsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  payload: [],
};

// API
const MISSION_API = 'https://api.spacexdata.com/v3/missions';

// Action Type for fetching missions
const FETCH_MISSIONS = '/get/missions/all';

// Redux Thunk For Handling API
export const getMission = createAsyncThunk(FETCH_MISSIONS, async () => {
  const payload = await (await fetch(MISSION_API)).json();
  return payload;
});

// Reducer
const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [getMission.fulfilled]: (state, action) => {
      let { payload } = action;
      payload = payload.map((each) => ({
        ...each,
        reserved: false,
      }));
      return {
        payload,
      };
    },
  },
});

export const { updateMission } = MissionSlice.actions;
export default MissionSlice.reducer;

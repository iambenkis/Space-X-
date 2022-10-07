import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  payload: [],
};

// API
const MISSION_API = 'https://api.spacexdata.com/v3/missions';

// Action Type for fetching missions
const FETCH_MISSIONS = '/get/missions/all';

// Redux Thunk For Handling Mission API
export const getMission = createAsyncThunk(FETCH_MISSIONS, async () => {
  const payload = await (await fetch(MISSION_API)).json();
  return payload;
});

// Reducer
const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    updateMission: (state, action) => {
      const filteredData = state.payload.map((each) => {
        if (each.mission_id === action.payload.id) {
          return {
            ...each,
            joined: !action.payload.joined,
          };
        }
        return each;
      });
      return {
        payload: filteredData,
      };
    },
  },
  extraReducers: {
    [getMission.fulfilled]: (state, action) => {
      let { payload } = action;
      payload = payload.map((each) => ({
        ...each,
        joined: false,
      }));
      return {
        payload,
      };
    },
  },
});

export const { updateMission } = MissionSlice.actions;
export default MissionSlice.reducer;

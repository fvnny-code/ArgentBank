import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const userReducer = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUserInfos: (state, action) => {
      state = action.payload;
      return state;
    },
    clearCredentials: (state, action) => {
      return null;
    },
  },
});

export const { setUserInfos, clearCredentials } = userReducer.actions;
export default userReducer.reducer;

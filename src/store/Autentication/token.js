import { createSlice } from "@reduxjs/toolkit";
import { clientHTTP } from "../../api/api";

const initialState = {
  value: localStorage.getItem("token") || 0,
};

const tokenReducer = createSlice({
  name: "token",
  initialState,

  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      //automatisation du changement de header dans mon clientHTTP
     clientHTTP.defaults.headers.common['Authorization'] = `Bearer ${action.payload}`;
    },
  },
});

export const { setToken } = tokenReducer.actions;
export default tokenReducer.reducer;

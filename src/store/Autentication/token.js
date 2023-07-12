import { createSlice } from "@reduxjs/toolkit";
import { clientHTTP } from "../../api/api";

const initialState = null;

const tokenReducer = createSlice({
  name: "token",
  initialState,

  reducers: {
    setToken: (state, action) => {
      state = action.payload;

      //automatisation du changement de header dans mon clientHTTP
      clientHTTP.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload}`;
      console.log(clientHTTP.defaults.headers.common)
      return state;
    },
    clearCredentials: (state, action) => {
      delete clientHTTP.defaults.headers.common[
        "Authorization"
      ]
      //console.log(clientHTTP.defaults.headers.common)
    return null;
    },
  },
});

export const { setToken, clearCredentials } = tokenReducer.actions;
export default tokenReducer.reducer;

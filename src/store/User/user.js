import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const userReducer = createSlice({
    name : "user",
    initialState,

    reducers : {
       setUserInfos:(state, action)=> {
        state = action.payload;
        return state;
       },
    },

});

export const { setUserInfos } = userReducer.actions;
export default userReducer.reducer;
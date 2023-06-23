import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import tokenReducer from "./Autentication/token";
import userReducer from "./User/user";

const reducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
});
export const store = configureStore({
  reducer,
});

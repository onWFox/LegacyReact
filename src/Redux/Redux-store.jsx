import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import SearchNewUsersReduscer from "./SearchNewUsersReduscer";
import AuthReduscer from "./Auth-Reducer";

const reducers = combineReducers(
  {
  ProfilePage: ProfileReducer,
  MessagesPage: MessagesReducer,
  usersPage: SearchNewUsersReduscer,
  auth: AuthReduscer
});

let store = configureStore({
  reducer: reducers,
});

window.store =store


export default store;

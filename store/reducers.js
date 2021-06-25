import { combineReducers } from "redux";
import * as types from "./types";

import appReducer from "./reducers/appReducer";
import authReducer from "./reducers/authReducer";

// COMBINED REDUCERS
const reducers = {
  appReducer,
  authReducer,
};

export default combineReducers(reducers);

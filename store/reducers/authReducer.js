import { SET_AUTH, SET_LOGGED_IN } from "../types";

const initialState = {
  loggedIn: false,
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.data,
      };
    case SET_AUTH:
      return {
        ...state,
        auth: action.data,
      };
    default:
      return state;
  }
};

export default authReducer;

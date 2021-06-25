import api from "../../api";
import { SET_AUTH, SET_LOGGED_IN } from "../types";

export const setAuth = (user) => {
  return {
    type: SET_AUTH,
    data: user,
  };
};

export const setLoggedIn = (loggedIn) => {
  return {
    type: SET_LOGGED_IN,
    data: loggedIn,
  };
};

export const logout = async (dispatch) => {
  api.post("/logout");
  dispatch(setLoggedIn(false));
  dispatch(setAuth(false));
};

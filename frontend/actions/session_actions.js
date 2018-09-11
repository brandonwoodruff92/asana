import SessionApiUtil from "../util/session_api_util";
import * as ActionConstants from "../constants/action_constants";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: ActionConstants.RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: ActionConstants.LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = (errors) => {
  return {
    type: ActionConstants.RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then( (user) => {
      return dispatch(receiveCurrentUser(user));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout().then( () => {
      return dispatch(logoutCurrentUser());
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user).then( (user) => {
      return dispatch(receiveCurrentUser(user));
    });
  };
};

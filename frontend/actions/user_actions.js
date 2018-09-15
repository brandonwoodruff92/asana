import UserApiUtil from "../util/user_api_util";
import * as ActionConstants from "../constants/action_constants";

export const receiveUser = (user) => {
  return {
    type: ActionConstants.RECEIVE_USER,
    user
  };
};

export const addUserToTask = (userId, taskId) => {
  return (dispatch) => {
    return UserApiUtil.addUserToTask(userId, taskId).then( (user) => {
      return dispatch(receiveUser(user));
    });
  };
};

export const removeUserFromTask = (userId, taskId) => {
  return (dispatch) => {
    return UserApiUtil.removeUserFromTask(userId, taskId).then( (user) => {
      return dispatch(receiveUser(user));
    });
  };
};

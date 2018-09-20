import * as ActionConstants from "../constants/action_constants";

const sessionsErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionConstants.RECEIVE_SESSION_ERRORS:

      return action.errors;
    case ActionConstants.CLEAR_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionsErrorsReducer;

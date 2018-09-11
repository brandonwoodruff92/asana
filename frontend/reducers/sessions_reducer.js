import { merge } from "lodash";

import * as ActionConstants from "../constants/action_constants";

const defaultState = {
  id: null
};

const sessionsReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.RECEIVE_CURRENT_USER:
      newState.id = action.currentUser.id;
      return newState;
    case ActionConstants.LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};

export default sessionsReducer;

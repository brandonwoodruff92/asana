import { merge } from "lodash";

import * as ActionConstants from "../constants/action_constants";

const usersReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;

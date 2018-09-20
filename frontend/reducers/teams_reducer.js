import * as ActionConstants from "../constants/action_constants";
import { merge } from "lodash";

const teamsReducer = (state = {}, action) => {
  const newState = merge({}, action);

  switch (action.type) {
    case ActionConstants.RECEIVE_TEAM:
      newState[action.team.id] = action.team;
      return newState;
    default:
      return state;
  }
};

export default teamsReducer;

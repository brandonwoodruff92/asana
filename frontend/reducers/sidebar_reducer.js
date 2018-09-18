import { merge } from "lodash";
import * as ActionConstants from "../constants/action_constants";

const defaultState = {
  show: true
};

const sidebarReducer = (state = defaultState, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.TOGGLE_SIDEBAR:
      newState.show = state.show ? false : true;
      return newState;
    default:
      return state;
  }
};

export default sidebarReducer;

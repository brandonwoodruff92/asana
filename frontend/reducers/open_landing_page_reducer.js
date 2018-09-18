import { merge } from "lodash";
import * as ActionConstants from "../constants/action_constants";

const openLandingPageReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.SET_SELECTED_LINK:
      newState.selectedLink = action.link;
      return newState;
    default:
      return state;
  }
};

export default openLandingPageReducer;

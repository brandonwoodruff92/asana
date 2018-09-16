import * as ActionConstants from "../constants/action_constants";
import { merge } from "lodash";

const sectionsReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.RECEIVE_SECTIONS:
      return action.sections;
    case ActionConstants.RECEIVE_SECTION:
      newState[action.section.id] = action.section;
      return newState;
    default:
      return state;
  }
};

export default sectionsReducer;

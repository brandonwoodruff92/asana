import * as ActionConstants from "../constants/action_constants";
import { merge } from "lodash";

const defaultState = {
  mountedEntity: null
};

const taskListReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.MOUNT_ENTITY:
      newState.mountedEntity = {
        type: action.entityType,
        id: action.entityId
      };
      return newState;
    case ActionConstants.UNMOUNT_ENTITY:
      return defaultState;
    default:
      return state;
  }
};

export default taskListReducer;

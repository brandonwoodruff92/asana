import * as ActionConstants from "../constants/action_constants";

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case ActionConstants.OPEN_MODAL:
      return action.modal;
    case ActionConstants.CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalReducer;

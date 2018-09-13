import * as ActionConstants from "../constants/action_constants";

export const openModal = (modal) => {
  return {
    type: ActionConstants.OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: ActionConstants.CLOSE_MODAL
  };
};

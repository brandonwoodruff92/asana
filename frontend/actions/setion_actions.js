import SectionApiUtil from "../util/section_api_util";
import * as ActionConstants from "../constants/action_constants";

export const receiveSections = (sections) => {
  return {
    type: ActionConstants.RECEIVE_SECTIONS,
    sections
  };
};

export const receiveSection = (section) => {
  return {
    type: ActionConstants.RECEIVE_SECTION,
    section
  };
};

export const mountSection = (sectionId) => {
  return {
    type: ActionConstants.MOUNT_ENTITY,
    entityType: "section",
    entityId: sectionId
  };
};

export const fetchAllSections = () => {
  return (dispatch) => {
    return SectionApiUtil.fetchAllSections().then( (sections) => {
      return dispatch(receiveSections(sections));
    });
  };
};
export const createSection = (section) => {
  return (dispatch) => {
    return SectionApiUtil.createSection(section).then( (section) => {
      dispatch(receiveSection(section));
      dispatch(mountSection(section));
    });
  };
};

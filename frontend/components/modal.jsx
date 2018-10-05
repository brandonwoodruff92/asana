import React from "react";
import { closeModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import * as ModalConstants from "../constants/modal_constants";

import ProjectForm from "./open/project/project_form";
import ProjectUpdate from "./open/project/project_update";
import DeleteProject from "./open/project/delete_project";

const Modal = ({ modal, projectToUpdate, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal) {
    case ModalConstants.PROJECT_FORM:
      component = <ProjectForm closeModal={ closeModal } />;
      break;
    case ModalConstants.PROJECT_UPDATE:
      component = <ProjectUpdate closeModal={ closeModal }  project={ projectToUpdate } />;
      break;
    case ModalConstants.DELETE_PROJECT:
      component = <DeleteProject closeModal={ closeModal } project={ projectToUpdate } />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={ closeModal }>
      <div className="modal-child"onClick={ (e) => e.stopPropagation() }>
        { component }
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    modal: state.ui.modal,
    projectToUpdate: state.entities.projects[state.ui.projectList.projectToUpdate]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => {
      return dispatch(closeModal());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

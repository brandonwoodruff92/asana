import React from "react";
import { connect } from "react-redux";

import { fetchAllProjects } from "../../../actions/project_actions";
import { toggleProjectOptions } from "../../../actions/project_list_actions";
import { openModal } from "../../../actions/modal_actions";

import ProjectList from "./project_list";

const ProjectIndex = (props) => {
  return (
    <div className="project-index-screen">
      <div className="project-index">
        <div className="project-index-header">
          <div id="recent-projects-header">
            Recent Projects
          </div>
        </div>

        <ProjectList
          projects={ props.projects }
          showProjectOptions={ props.showProjectOptions }
          fetchAllProjects={ props.fetchAllProjects }
          toggleProjectOptions={ props.toggleProjectOptions }
          openModal={ props.openModal } />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    projects: Object.values(state.entities.projects),
    showProjectOptions: state.ui.projectList.showProjectOptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllProjects: () => {
      return dispatch(fetchAllProjects());
    },
    toggleProjectOptions: (id) => {
      return dispatch(toggleProjectOptions(id));
    },
    openModal: (modal) => {
      return dispatch(openModal(modal));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);

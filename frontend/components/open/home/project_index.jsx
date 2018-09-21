import React from "react";
import { connect } from "react-redux";

import { fetchAllProjects } from "../../../actions/project_actions";
import { openModal } from "../../../actions/modal_actions";

import ProjectList from "./project_list";

const ProjectIndex = (props) => {
  return (
    <div className="project-index">
      <div className="project-index-header">
        <div id="recent-projects-header">
          Recent Projects
        </div>
      </div>

      <ProjectList
        projects={ props.projects }
        fetchAllProjects={ props.fetchAllProjects }
        openModal={ props.openModal } />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    projects: Object.values(state.entities.projects)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllProjects: () => {
      return dispatch(fetchAllProjects());
    },
    openModal: (modal) => {
      return dispatch(openModal(modal));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);

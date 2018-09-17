import React from "react";
import { connect } from "react-redux";
import { fetchAllProjects } from "../../../actions/project_actions";

import ProjectList from "./project_list";

const ProjectIndex = (props) => {
  return (
    <div className="project-index">
      <ProjectList
        projects={ props.projects }
        fetchAllProjects={ props.fetchAllProjects } />
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);

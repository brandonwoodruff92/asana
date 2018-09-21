import React from "react";
import * as ModalConstants from "../../../constants/modal_constants";

import ProjectItem from "./project_item";

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  handleClick() {
    this.props.openModal(ModalConstants.PROJECT_FORM);
  }

  render() {
    const projects = this.props.projects.map( (project) => {
      return (
        <div className="project-item-container">
          <ProjectItem
            key={ project.id }
            project={ project } />
          <div className="project-item-name-text">
            { project.name }
          </div>
        </div>
      );
    });

    return (
      <div className="project-list">
        { projects }
        <div
          id="new-project-container"
          onClick={ this.handleClick }>
          <div
            id="new-project-box"
            className="project-box">
            +
          </div>
          <div className="project-item-name-text">
            New Project
          </div>
        </div>
      </div>
    );
  }
}

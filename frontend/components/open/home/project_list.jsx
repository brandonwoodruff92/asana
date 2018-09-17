import React from "react";

import ProjectItem from "./project_item";

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  render() {
    const projects = this.props.projects.map( (project) => {
      return <ProjectItem
        key={ project.id }
        project={ project } />;
    });

    return (
      <div>
        <ul>
          { projects }
        </ul>
      </div>
    );
  }
}

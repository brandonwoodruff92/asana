import React from "react";

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  render() {
    const projects = this.props.projects.map( (project) => {
      return <ProjectItem project={ project } />;
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

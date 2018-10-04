import React from "react";
import SvgUtil from "../../../util/svg_util";

import ProjectOptions from "../project/project_options";

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  toggleOptions(id) {
    return (e) => {
      e.stopPropagation();

      if (!this.optionsActive()) {
        this.props.toggleProjectOptions(id);
      } else {
        this.props.toggleProjectOptions();
      }
    };
  }

  renderProjectOptions() {
    if (this.optionsActive()) {
      return (
        <ProjectOptions
          project={ this.props.project }
          toggleProjectOptions={ this.props.toggleProjectOptions } />
      );
    } else {
      return null;
    }
  }

  optionsActive() {
    return this.props.showProjectOptions === this.props.project.id;
  }

  render() {
    let toggle;

    if (!this.optionsActive()) {
      toggle = this.props.project.id;
    }

    return (
      <div
        className="project-box"
        style={{background: this.props.project.color_id}}>
        { SvgUtil.renderEllipsis("project-item-ellipsis", this.toggleOptions(toggle)) }
        { SvgUtil.renderList("project-item-icon") }
        { this.renderProjectOptions() }
      </div>
    );
  }

}

export default ProjectItem;

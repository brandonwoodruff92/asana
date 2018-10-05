import React from "react";
import { connect } from "react-redux";

import { updateProject } from "../../../actions/project_actions";

class ProjectUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.props.closeModal();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit() {
    this.props.updateProject(this.state);
    this.props.closeModal();
  }

  render() {
    return (
      <div className="project-update-modal">
        <div className="project-update-header">
          <div className="project-update-title">
            <p className="primary-title">Edit</p>
            <p className="secondary-title">{ this.props.project.name }</p>
          </div>
          <div
            className="project-update-close"
            onClick={ this.handleClose }>
            &#10005;
          </div>
        </div>
        <div className="project-update-form">
          <div className="update-input-row">
            <div className="update-form-label">
              Project Name
            </div>
            <input
              id="update-name-input"
              className="update-input"
              type="text"
              value={ this.state.name }
              onChange={ this.update("name") }>
            </input>
          </div>
          <div className="update-input-row">
            <div className="update-form-label">
              Description
            </div>
            <textarea
              id="update-description-input"
              className="update-input"
              value={ this.state.description }
              onChange={ this.update("description") }>
            </textarea>
          </div>
          <div className="update-submit-row">
            <div
              className="update-submit"
              onClick={ this.handleSubmit }>
              Update Project
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateProject: (project) => {
      return dispatch(updateProject(project));
    }
  };
}

export default connect(null, mapDispatchToProps)(ProjectUpdate);

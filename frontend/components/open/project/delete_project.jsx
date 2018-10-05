import React from "react";
import { connect } from "react-redux";

import { deleteProject } from "../../../actions/project_actions";

class DeleteProject extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.props.closeModal();
  }

  handleSubmit() {
    this.props.deleteProject(this.props.project.id);
    this.props.closeModal();
  }

  render() {
    return (
      <div className="delete-project-screen">
        <div className="delete-project-header">
          <div className="delete-project-title">
            { `Delete the "${this.props.project.name}" project?`}
          </div>
          <div
            className="delete-project-close"
            onClick={ this.handleClose }>
            &#10005;
          </div>
        </div>
        <div className="delete-project-content">
          <div className="delete-confirmation-row">
            <div className="delete-confirmation-text">
              This will delete the project and any unassigned tasks that are only in this project.
            </div>
          </div>
          <div className="delete-submit-row">
            <div
              className="delete-cancel-button delete-button"
              onClick={ this.handleClose }>
              Cancel
            </div>
            <div
              className="delete-submit-button delete-button"
              onClick={ this.handleSubmit }>
              { `Delete ${this.props.project.name}` }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProject: (id) => {
      return dispatch(deleteProject(id));
    }
  };
}

export default connect(null, mapDispatchToProps)(DeleteProject);

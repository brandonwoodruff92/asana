import React from "react";

export default class ProjectUpdate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-update-modal">
        <div className="project-update-header">
          <div className="project-update-title">
            <p className="primary-title">Edit</p>
            <p className="secondary-title">{ this.props.project.id }</p>
          </div>
          <div className="project-update-close">
            &#10005;
          </div>
        </div>
        <div className="project-update-form">
          <div className="update-name-row">
            <div className="form-label">
              Project Name
            </div>
            <input
              id="update-name-input"
              className="update-input"
              type="text">
            </input>
          </div>
          <div className="update-description-row">
            <div className="form-label">
              Description
            </div>
            <input
              id="update-description-input"
              className="update-input"
              type="textarea">
            </input>
          </div>
          <div className="update-submit-row">
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import { connect } from "react-redux";
import SvgUtil from "../../../util/svg_util";

import { createProject } from "../../../actions/project_actions";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      projectDescription: "",
      showDescription: false
    };

    this.openDescription = this.openDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  openDescription() {
    this.setState({
      showDescription: true
    });
  }

  handleSubmit() {
    if (this.state.projectName) {
      const project = {
        name: this.state.projectName,
        description: this.state.projectDescription
      };

      this.props.createProject(project);
    }
  }

  render() {
    const projectNameClass = this.state.projectName ? "project-name-input project-name-not-empty" : "project-name-input";
    const descriptionLabelClass = this.state.showDescription ? "description-label-open" : "description-label-closed";
    const descriptionInputClass = this.state.showDescription ? "description-input-open" : "description-input-closed";
    const buttonActiveClass = this.state.projectName ? "button-active" : "button-disabled";

    return (
      <div className="project-form">
        <div className="project-form-header">
          <p>New Project</p>
          <p
            id="project-form-close"
            onClick={ this.props.closeModal }>
            &#10005;
          </p>
        </div>
        <form className="project-form-content">
          <div className="project-name-form">
            <div className="label-container">
              <label className="form-label">Project Name</label>
            </div>
            <input
              className={ projectNameClass }
              onChange={ this.update("projectName") }
              type="text" />
          </div>
          <div className="project-description-form">
            <div className="label-container">
              <label
                id="project-description-label"
                className={ `form-label ${descriptionLabelClass}` }
                onClick={ this.openDescription }>
                Description
              </label>
            </div>
            <textarea
              className={ `project-description-input ${descriptionInputClass}` }
              onChange={ this.update("projectDescription") } />
          </div>
          <div className="project-radio-form">
            <div className="label-container">
              <label className="form-label">Layout</label>
            </div>
            <div className="layout-input-container">
              <div className="layout-input-item">
                <input
                  className="project-radio-input"
                  type="radio"
                  name="layout-radio"
                  checked />
                { SvgUtil.renderList() }
                <div className="option-description-container">
                  <div className="option-description-label">List</div>
                  <div className="option-description">
                    Organize your work in an itemized list
                  </div>
                </div>
              </div>
              <div
                id="second-radio-button"
                className="layout-input-item">
                <input
                  className="project-radio-input"
                  type="radio"
                  name="layout-radio" />
                { SvgUtil.renderBoard() }
                <div className="option-description-container">
                  <div className="option-description-label">Board</div>
                  <div className="option-description">
                    Organize your work like sticky notes on a board.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-radio-form">
            <div className="label-container">
              <label className="form-label">Privacy</label>
            </div>
            <div className="layout-input-container">
              <div className="layout-input-item">
                <input
                  className="project-radio-input"
                  type="radio"
                  name="privacy-radio"
                  checked />
                { SvgUtil.renderUsers() }
                <div className="option-description-container">
                  <div className="option-description-label">Public to Team</div>
                </div>
              </div>
              <div
                id="second-radio-button"
                className="layout-input-item">
                <input
                  className="project-radio-input"
                  type="radio"
                  name="privacy-radio" />
                { SvgUtil.renderUser() }
                <div className="option-description-container">
                  <div className="option-description-label">Private to me</div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-container">
            <div
              className={ `project-submit-button ${buttonActiveClass}` }
              onClick={ this.handleSubmit }>
              Create Project
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProject: (project) => {
      return dispatch(createProject(project));
    }
  };
}

export default connect(null, mapDispatchToProps)(ProjectForm);

import React from "react";
import SvgUtil from "../../../util/svg_util";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-form">
        <div className="project-form-header">
          <p>New Project</p>
        </div>
        <form className="project-form-content">
          <div className="project-name-form">
            <div className="label-container">
              <label className="form-label">Project Name</label>
            </div>
            <input id="project-name-input" type="text" />
          </div>
          <div className="project-description-form">
            <div className="label-container">
              <label className="form-label">Description</label>
            </div>
            <textarea id="project-description-input" />
          </div>
          <div className="project-layout-form">
            <div className="label-container">
              <label className="form-label">Layout</label>
            </div>
            <div className="layout-input-container">
              <div className="layout-input-item">
                <input className="project-radio-input" type="radio" />
                { SvgUtil.renderList() }
                <div className="option-description-container">
                  <div className="option-description-label">List</div>
                  <div className="option-description">Organize your work in an itemized list</div>
                </div>
              </div>
              <div id="second-radio-button" className="layout-input-item">
                <input className="project-radio-input" type="radio" />
                { SvgUtil.renderBoard() }
                <div className="option-description-container">
                  <div className="option-description-label">Board</div>
                  <div className="option-description">Organize your work like sticky notes on a board.</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ProjectForm;

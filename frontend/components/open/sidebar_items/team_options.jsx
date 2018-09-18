import React from "react";
import * as ModalConstants from "../../../constants/modal_constants";

class TeamOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-options">
        <ul className="options-list">
          <p
            className="team-option"
            onClick={ () => this.props.openModal(ModalConstants.PROJECT_FORM) }>
            Add Project
          </p>
        </ul>
      </div>
    );
  }
}

export default TeamOptions;

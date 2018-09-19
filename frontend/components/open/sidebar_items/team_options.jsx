import React from "react";
import * as ModalConstants from "../../../constants/modal_constants";

class TeamOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(e) {
    const node = document.getElementById("team-options");
    if (!node.contains(e.target)) {
      console.log("hello");
      this.props.toggleTeamOptions();
    }
  }

  render() {
    return (
      <div id="team-options" className="team-options">
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

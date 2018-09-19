import React from "react";
import * as ModalConstants from "../../../constants/modal_constants";

class TeamOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  // handleClickOutside(e) {
  //   const node = document.getElementById("team-options");
  //   if (!node.contains(e.target)) {
  //     console.log("hello");
  //     this.props.toggleTeamOptions();
  //   }
  // }

  handleClick(e) {
    const node = document.getElementById("team-options");
    if (!node.contains(e.target)) {
      this.props.toggleTeamOptions();
    } else {
      this.props.openModal(ModalConstants.PROJECT_FORM);
      this.props.toggleTeamOptions();
    }
  }

  render() {
    return (
      <div id="team-options" className="team-options">
        <ul className="options-list">
          <p
            className="team-option"
            onClick={ this.handleClick }>
            Add Project
          </p>
        </ul>
      </div>
    );
  }
}

export default TeamOptions;

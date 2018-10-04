import React from "react";
import * as ModalConstants from "../../../constants/modal_constants";

import { toggleSidebarProjectOptions } from "../../../actions/sidebar_actions";

class SidebarProjectOptions extends React.Component {
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

  handleClick(e) {
    const node = document.getElementById("sidebar-project-options");
    if (!node.contains(e.target)) {
      toggleSidebarProjectOptions();
    }
  }

  render() {
    return (
      <div
        id="sidebar-project-options"
        className="sidebar-project-options">
        <ul className="options-list">
          <p className="sidebar-project-option">
            Add to Favorites
          </p>
          <p className="sidebar-project-option">
            Delete Project
          </p>
        </ul>
      </div>
    );
  }
}

export default SidebarProjectOptions;

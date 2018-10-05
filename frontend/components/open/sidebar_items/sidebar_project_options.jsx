import React from "react";
import { connect } from "react-redux";
import * as ModalConstants from "../../../constants/modal_constants";

import { toggleSidebarProjectOptions } from "../../../actions/sidebar_actions";
import { mountProjectUpdate } from "../../../actions/project_list_actions";
import { openModal } from "../../../actions/modal_actions";

const Selections = {
  DELETE: "deletePProject"
};

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

  handleSelection(selection) {
    return () => {
      switch (selection) {
        case Selections.DELETE:
          this.props.mountProjectUpdate(this.props.project.id);
          this.props.openModal(ModalConstants.DELETE_PROJECT);
          break;
        default:
      }

      this.props.toggleSidebarProjectOptions();
    };
  }

  handleClick(e) {
    const node = document.querySelector(".sidebar-project-options");
    if (!node.contains(e.target)) {
      this.props.toggleSidebarProjectOptions();
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
          <p
            className="sidebar-project-option"
            onClick={ this.handleSelection(Selections.DELETE ) }>
            Delete Project
          </p>
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    mountProjectUpdate: (id) => {
      return dispatch(mountProjectUpdate(id));
    },
    deleteProject: (id) => {
      return dispatch(deleteProject(id));
    },
    openModal: (modal) => {
      return dispatch(openModal(modal));
    },
    toggleSidebarProjectOptions: (id) => {
      return dispatch(toggleSidebarProjectOptions(id));
    }
  };
}

export default connect(null, mapDispatchToProps)(SidebarProjectOptions);

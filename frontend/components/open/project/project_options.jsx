import React from "react";
import { connect } from "react-redux";
import * as ModalConstants from "../../../constants/modal_constants";

import { openModal, closeModal } from "../../../actions/modal_actions";

const Selections = {
  ADD_FAVORITES: "Add Favorites",
  EDIT: "Edit"
};

class ProjectOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown",this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  handleSelection(selection) {
    return () => {
      switch (selection) {
        case Selections.ADD_FAVORITES:
          break;
        case Selections.EDIT:
          this.props.openModal(ModalConstants.PROJECT_UPDATE);
          break;
        default:
          return;
      }

      this.props.toggleProjectOptions();
    };
  }

  handleClick(e) {
    const node = document.querySelector(".project-options");
    if (!node.contains(e.target)) {
      this.props.toggleProjectOptions();
    }
  }

  render() {
    return (
      <div className="project-options">
        <ul className="options-list">
          <p
            className="project-option"
            onClick={ this.handleSelection(Selections.ADD_FAVORITES) }>
            Add to Favorites
          </p>
          <p
            className="project-option"
            onClick={ this.handleSelection(Selections.EDIT) }>
            Edit Name & Description...
          </p>
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (modal) => {
      return dispatch(openModal(modal));
    },
    closeModal: () => {
      return dispatch(closeModal());
    }
  };
}

export default connect(null, mapDispatchToProps)(ProjectOptions);

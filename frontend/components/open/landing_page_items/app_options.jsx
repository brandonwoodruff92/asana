import React from "react";
import SvgUtil from "../../../util/svg_util";
import * as ModalConstants from "../../../constants/modal_constants";

export default class AppOptions extends React.Component {
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
    const node = document.getElementById("app-options");
    if (!node.contains(e.target)) {
      this.props.toggleAppOptions();
    } else {
      this.props.openModal(ModalConstants.PROJECT_FORM);
      this.props.toggleAppOptions();
    }
  }

  render() {
    return (
      <div id="app-options">
        <div
          className="app-option"
          onClick={ this.props.openModal}>
          { SvgUtil.renderList("app-list-icon") }
          <p>Project</p>
        </div>
      </div>
    );
  }
}

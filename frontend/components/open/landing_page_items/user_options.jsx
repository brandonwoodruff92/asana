import React from "react";

export default class UserOptions extends React.Component {
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
    const node = document.getElementById("user-options");
    if (!node.contains(e.target)) {
      this.props.toggleUserOptions();
    } else {
      this.props.logout();
      this.props.toggleUserOptions();
    }
  }

  render() {
    return (
      <div id="user-options">
        <div className="user-options-section">
          <div
            className="user-option"
            onClick={ this.props.logout }>
            Log Out
          </div>
        </div>
      </div>
    );
  }
}

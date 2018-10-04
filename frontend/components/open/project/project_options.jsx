import React from "react";

export default class ProjectOptions extends React.Component {
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
          <p className="project-option">
            Add to Favorites
          </p>
          <p className="project-option">
            Edit Name & Description...
          </p>
        </ul>
      </div>
    );
  }
}

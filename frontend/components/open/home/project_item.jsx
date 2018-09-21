import React from "react";
import SvgUtil from "../../../util/svg_util";

const ProjectItem = (props) => {
  return (
    <div
      className="project-box"
      style={{background: props.project.color_id}}>
      { SvgUtil.renderEllipsis("project-item-ellipsis") }
      { SvgUtil.renderList("project-item-icon") }
    </div>
  );
};

export default ProjectItem;

import React from "react";
import SvgUtil from "../../../util/svg_util";

import SidebarProjectOptions from "./sidebar_project_options";

const SidebarProjectItem = ({ project, showSidebarProjectOptions, toggleSidebarProjectOptions }) => {
  let sidebarProjectOptions;
  let toggle;

  if (showSidebarProjectOptions === project.id) {
    sidebarProjectOptions = (
      <SidebarProjectOptions project={ project } />
    )
  } else {
    sidebarProjectOptions = null;
    toggle = project.id
  }

  return (
    <div className="sidebar-project-item">
      <div
        className="sidebar-project-color-dot"
        style={{background: project.color_id}} />
      <div className="sidebar-project-name">{ project.name }</div>
      { SvgUtil.renderEllipsis("sidebar-project-ellipsis", toggleSidebarProjectOptions(toggle)) }
      { sidebarProjectOptions }
    </div>
  );
};

export default SidebarProjectItem;
